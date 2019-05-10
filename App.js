import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert
} from "react-native";
//Library
import CustomModal from "react-native-modal";
import { Container, Content } from "native-base";

//Icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

//const
//import * from "./constant";

//style
//import DEFAULT_COLOR from "./color";
import mainStyle from "./styles/styles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //****** WizardFormModal *******/
      visibleStep2: false,
      visibleStep3: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Step 1 */}
        <Container>
          <View
            style={{
              backgroundColor: "#0f2b59",
              padding: 20,
              flexDirection: "row"
            }}
          >
            <View style={{ flex: 1, justifyContent: "center" }}>
              <TouchableOpacity>
                <Text style={{ color: "#fff", textAlign: "left" }} />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 5 }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                STEP 1
              </Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <TouchableOpacity>
                <Text style={{ color: "#fff", textAlign: "right" }} />
              </TouchableOpacity>
            </View>
          </View>
          <Container>
            <View style={[mainStyle.container, mainStyle.middleCenter]}>
              <Text style={[mainStyle.display3]}>1</Text>
            </View>
          </Container>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={[styles.footerBtn, { backgroundColor: "#2377d1" }]}
              onPress={() => this.toggleStep2(true)}
            >
              <Text style={[styles.text, styles.footerTextButton]}>Next</Text>
            </TouchableOpacity>
          </View>
        </Container>

        {/* Step 2 */}
        {this.step2Modal()}
        {/* Step 3 */}
        {this.step3Modal()}
      </View>
    );
  }

  //Form Function
  toggleStep2(visible) {
    this.setState({
      visibleStep2: visible
    });
  }
  toggleStep3(visible) {
    this.setState({
      visibleStep3: visible
    });
  }
  submitForm(navigation) {
    Alert.alert(
      "Confirm Submission",
      "Are you sure you want to Submit this Initial Defect Registration (IDR)?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Submit",
          onPress: () => [
            console.log("OK Pressed"),
            this.toggleStep3(false),
            this.toggleStep2(false),
            // navigation.navigate("Home")
          ]
        }
      ],
      { cancelable: false }
    );
  }

  //Modal
  step2Modal() {
    return (
      <CustomModal
        isVisible={this.state.visibleStep2}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        onRequestClose={() => {
          this.toggleStep2(false);
        }}
        style={{ margin: 0, backgroundColor: "#fff" }}
      >
        <View
          style={{
            backgroundColor: "#0f2b59",
            padding: 20,
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <TouchableOpacity onPress={() => this.toggleStep2(false)}>
              <Ionicons
                name="md-arrow-back"
                size={24}
                style={{ color: "#fff" }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 5, justifyContent: "center" }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              STEP 2
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <TouchableOpacity>
              <Text style={{ color: "#fff", textAlign: "right" }} />
            </TouchableOpacity>
          </View>
        </View>
        <Container>
          <View style={[mainStyle.container, mainStyle.middleCenter]}>
            <Text style={[mainStyle.display3]}>2</Text>
          </View>
        </Container>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={[styles.footerBtn, { backgroundColor: "#2377d1" }]}
            onPress={() => this.toggleStep3(true)}
          >
            <Text style={[styles.text, styles.footerTextButton]}>Next</Text>
          </TouchableOpacity>
        </View>
      </CustomModal>
    );
  }
  step3Modal() {
    return (
      <CustomModal
        isVisible={this.state.visibleStep3}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        onRequestClose={() => {
          this.toggleStep3(false);
        }}
        style={{ margin: 0 }}
      >
        <View
          style={{
            backgroundColor: "#0f2b59",
            padding: 20,
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <TouchableOpacity onPress={() => this.toggleStep3(false)}>
              <Ionicons
                name="md-arrow-back"
                size={24}
                style={{ color: "#fff" }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 5, justifyContent: "center" }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              STEP 3
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <TouchableOpacity>
              <Text style={{ color: "#fff", textAlign: "right" }} />
            </TouchableOpacity>
          </View>
        </View>
        <Container>
          <View style={[mainStyle.container, mainStyle.middleCenter]}>
            <Text style={[mainStyle.display3]}>3</Text>
          </View>
        </Container>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={[styles.footerBtn, { backgroundColor: "#2377d1" }]}
            onPress={() => this.submitForm(this.props.navigation)}
          >
            <Text style={[styles.text, styles.footerTextButton]}>Submit</Text>
          </TouchableOpacity>
        </View>
      </CustomModal>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto"
  },
  container: {
    flex: 1
  },
  footerContainer: {
    justifyContent: "flex-end"
  },
  footerBtn: {
    alignItems: "center",
    paddingVertical: 18
  },
  footerTextButton: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold"
  }
});
