import { StatusBar } from "expo-status-bar";
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.style1}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={styles.style1.image}
                        source={require("../assets/images/usb.png")}
                    />
                    <Text style={styles.style1.text}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
                </View>
            </View>
            <View style={styles.style2}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Cực kỳ hài lòng</Text>
                <View style={{ flexDirection: 'row' }}>
                    {[...Array(5)].map((_, i) => (
                        <Image
                            key={i}
                            style={styles.style2.image}
                            source={require("../assets/images/star.png")}
                        />
                    ))}
                </View>
                <View style={styles.style2.themHinhAnh}>
                    <Image
                        style={{width: 39, height: 32, marginRight: 17,}}
                        source={require("../assets/images/camera.png")}
                    />
                    <Text style={{fontSize: 18, fontWeight: "bold",}}>Thêm hình ảnh</Text>
                </View>
                <TextInput
                    style={styles.style2.textInputChiaSe}
                    placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
                    multiline={true}
                />
                <TouchableOpacity>
                    <Text style={styles.style2.btnGui}>Gửi</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    style1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        image: {
            width: 70,
            height: 70,
            margin: 15,
        },
        text: {
            fontSize: 18,
            fontWeight: 'bold',

        },
    },
    style2: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        image: {
            width: 39,
            height: 39,
            marginRight: 17,
            marginTop: 18,
        },
        themHinhAnh:{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: 293,
            height: 68,
            borderWidth: 1,
            borderColor: "#1511EB",
            borderRadius: 5,
            marginTop: 30,
        },
        textInputChiaSe: {
            width: 293,
            height: 222,
            marginTop: 15,
            fontSize: 18,
            fontWeight: 'bold',
            color: "#C4C4C4",
            borderWidth: 1,
            borderColor: "#C4C4C4",
            borderRadius: 5,
            padding: 19,
        },
        btnGui:{
            width: 289,
            height: 41,
            textAlign: "center",
            color: "#FFFFFF",
            backgroundColor: '#0D5DB6',
            borderRadius: 5,
            marginTop: 20,
            fontSize: 20,
            fontWeight: 'bold',
            paddingTop: 5,
        },
    },
});