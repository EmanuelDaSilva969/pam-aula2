import { StyleSheet } from "react-native";

//Definindo o inicio do css nomeado "styles"
const styles = StyleSheet.create({

// css do container da view
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black"
    },
//inicio do css do Gradient Background
    GradientBackground:{
        position: "absolute",
        left: 0,
        right: 0,
        height: 1000,
        alignItems: "center",
        justifyContent: "center"
    },
    box:{
        marginTop:60,
        alignItems:"center",
        borderRadius: 15,
        backgroundColor: "white",
        width: "85%",
        height: 600,  
        justifyContent: "center"
    },

    input:{
        borderRadius: 5,
        width: "80%",
        marginLeft: 4,
        padding: 15,
        borderWidth: 1,
        marginTop: 10
    },
    viewicons:{
        width:"100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 35
    },

    viewbuttom:{
        width:"80%",
        justifyContent: "center",
        alignItems:"center"
    },

    buttom:{
        padding: 20,
        marginTop: 60,
        alignItems: "center",
        width: 300,
        borderRadius: 10,
        height: 60,
    },

    image:{
        width: 50,
        height: 50
    }
})

//exportando o css nomeado "styles" para pode puxar e usar em outros arquivos
export default styles;