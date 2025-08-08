import { FlatList, Image, ImageBackground, Text, View } from "react-native";


import { useEffect, useState } from "react";
import api from "../../context/api.js";
import Appointment from "../../components/appointment/index.js";
import icon from "../../context/icon.js";
import { styles } from "./style.js"
import { useAuth } from "../../context/auth.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

function AbaCalendar(props) {
    const { container, text } = styles;
    const [appointments, setAppointments] = useState([]);
    const [idTecnico, setIdTecnico] = useState(); // Default value for idTecnico
    const { user } = useAuth();

    async function LoadData() {
        try {
            const response = await api.get("/appointments/listar",
                {
                    headers: { Authorization: `Bearer ${user.token}` },
                    params: { id_tecnico: idTecnico }
                }
            );
            if (response.data) {
                console.log("chegou aqui");
                console.log("Dados recebidos:", response.data);
                setAppointments(response.data);
            }
        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error)
        }
    }

    async function deleteData(id_appointment) {
        try {
            const response = await api.delete("/appointments/" + id_appointment);
            if (response.data?.id_appointment)
                LoadData();
        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error)
        }
    }

    useEffect(() => {
        setIdTecnico(user.id_tecnico);
    }, [user]);
    useEffect(() => {
        LoadData();
    }, [user]);

    //     useEffect(() => {
    //     if (user?.id_tecnico) {
    //         setIdTecnico(user.id_tecnico);
    //     }
    // }, [user]);

    // console.log("tecnico:",idTecnico);


    // useEffect(() => {
    //     if (idTecnico) {
    //         LoadData();
    //     }
    // }, [idTecnico]);


    return (
        <>
            <View style={styles.headerBg}>
                <ImageBackground style={styles.imageHeader} source={require("../../assets/logo.png")}>
                    <Text style={styles.headerTextTop}>{user.name}</Text>
                    <Text style={styles.headerText}>V. 1.0.0</Text>
                </ImageBackground>
            </View>

            <View style={container}>
                {appointments.data}
                {appointments.length === 0
                    ?
                    <>
                        <View style={{ flex: 1 }}>
                            <Text style={text}>Você não possui agendamentos</Text>
                        </View>
                    </>
                    :

                    <FlatList data={appointments}
                        style={{ padding: 12 }}
                        keyExtractor={(doc) => doc.id_appointment}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <Appointment
                                    key={item.id_tecnico}
                                    service={item.service}
                                    id_appointment={item.id_appointment}
                                    tecnico={item.tecnico}
                                    specialty={item.specialty}
                                    bookingDate={item.booking_date}
                                    bookingHour={item.booking_hour}
                                    onPress={deleteData}
                                />
                            )
                        }} />

                }
            </View>
        </>)
}

export default AbaCalendar;