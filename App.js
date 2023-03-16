//codigo para instalar o linear gradient : "npx expo install expo-linear-gradient"
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./src/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["black", "firebrick", "crimson", "firebrick", "black"]}
        style={styles.GradientBackground}
      >
   
      </LinearGradient>
      <Image
          style={{
            height: "100%",
            width: "100%",
            position:'absolute',
            top:0,
            left:0
          }}
          source={{
            uri: "https://assets.dicebreaker.com/magic-the-gathering-phyrexia-all-will-be-one-elesh-norn-teaser-art.png/BROK/thumbnail/1200x900/quality/100/magic-the-gathering-phyrexia-all-will-be-one-elesh-norn-teaser-art.png",
          }}
        />
      {/*inicio da view de conteudo (caixas de texto de senha e e-mail)*/}

      <View style={styles.box}>
        <View style={styles.viewicons}>
          <MaterialCommunityIcons name="gmail" size={24} color="black" />
          <TextInput style={styles.input} placeholder="e-mail" />
        </View>

        <View style={styles.viewicons}>
          <FontAwesome5 name="key" size={24} color="black" />
          <TextInput style={styles.input} placeholder="senha" />
        </View>

        <View style={styles.viewbuttom}>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <LinearGradient colors={["black", "crimson"]} style={styles.buttom}>
              <Text style={{ color: "white", fontWeight: "bold" }}>ENTRAR</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

//codigo para startar o codigo: "expo start"
