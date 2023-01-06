import React, { useState } from "react";
import { ScrollView, View, Text, Image, ImageBackground, TouchableOpacity, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";


const JobPreview = ({navigation, route}) => {
    // console.log(route.params, "route")

    const [message, setMessage] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const PreviewData = route.params 
    // console.log(PreviewData, "preData")

    const Submit = async() => {
        await axios.post('http://192.168.135.94:3001/api/post/create', PreviewData)
        .then(res => {setMessage(res?.data?.message); setModalIsOpen(true)})
        .catch(error => {setMessage(error?.data?.message); setModalIsOpen(true)})

        // navigation.navigate('AllPost')
    }
    
    return (
        <ScrollView style={{
            height: '100%',
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 16
        }}>
            <View style={{
                height: 64,
                backgroundColor: 'white',
                justifyContent: 'center'
            }}>
                <Image source= {require('../assets/arrow-left.png')} />
            </View> 

            <Text style={{
                fontSize: 24,
                fontWeight: '600',   
            }} >
                Preview
            </Text>

            <View style={{height: 17}} />
            <View style={{
                flexDirection: 'row'
            }}>
                <Image source={require('../assets/profile1.png')} 
                    style={{width: 24, height: 24}}/>
                <Text style={{
                    fontSize: 14,
                    color: '#535665',
                    fontWeight: '600',
                    paddingLeft: 10
                }}>
                    John Doe
                </Text>
                <Text style={{
                    fontSize: 14,
                    color: '#535665',
                    paddingLeft: 5
                }}>
                    posting a new
                </Text>
                <Text style={{
                    fontSize: 14,
                    color: '#E46D47',
                    fontWeight: '600',
                    paddingLeft: 5
                }}>
                    Memories Update
                </Text>
            </View>

            <View style={{height: 24}} />
            <ImageBackground style={{
                height: 191,
                width: '100%', 
            }}
                imageStyle= {{borderRadius: 12, resizeMode: 'cover' }}
                source={{uri: 'https://images4.alphacoders.com/378/37864.jpg'}}
            >
                <Text style={{
                fontSize: 20,
                color: 'white',
                paddingTop: 149,
                fontWeight: '500',
                alignSelf: 'center'
                }}>
                    {route.params.post}
                </Text>
            </ImageBackground>

            <View style={{height: 24}} />
            <Text style={{
                fontSize: 14,
                fontWeight: '300',
                color: '#282C3F'
            }}>
                {route.params.description}
            </Text>
            <Text style={{
                fontSize: 14,
                fontWeight: '300',
                color: '#282C3F',
                marginTop: 5
            }}>
                Job Profile : {route.params.jobProfile}
            </Text>
            <Text style={{
                fontSize: 14,
                fontWeight: '300',
                color: '#282C3F',
                marginTop: 5
            }}>
                Company : {route.params.company}
            </Text>
            <Text style={{
                fontSize: 14,
                fontWeight: '300',
                color: '#282C3F',
                marginTop: 5
            }}>
                Experience : {route.params.experience}
            </Text>
            <Text style={{
                fontSize: 14,
                fontWeight: '300',
                color: '#282C3F',
                marginTop: 5
            }}>
                Location : {route.params.location}
            </Text>
            <Text style={{
                fontSize: 14,
                fontWeight: '300',
                color: '#282C3F',
                marginTop: 5
            }}>
                Url ( if any ) : {route.params.url}
            </Text>
            <Text style={{
                fontSize: 14,
                fontWeight: '300',
                color: '#282C3F',
                marginTop: 5
            }}>
                Phone Number : {route.params.phoneNo}
            </Text>
                
            <View style={{height: 10}} />
            <Text style={{
                fontSize: 14,
                color: '#035C92',
                textAlign: 'left'
            }}>
                @Bhau Kadam, @Chetan Adamapure    
            </Text>

            <View style={{height: 24}} />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    fontSize: 12,
                    color: '#7D7F8B'
                }}>
                    Who all can see this post
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <Image source={{uri: 'https://thumbs.dreamstime.com/b/globe-symbol-icon-orange-simple-isolated-vector-illustration-137966603.jpg'}} 
                        style={{width: 15, height: 15}}    
                    />
                    <Text style={{
                        fontSize: 12,
                        color: '#E46D47',
                        paddingLeft: 6,
                        paddingRight: 9,
                        textDecorationLine: 'underline'
                    }}>
                        Public
                    </Text>
                    <Image style={{width: 15, height: 15}}
                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUOiCt4AFQ17wQCtOaJYFTJx6ko9Aq_UYZw&usqp=CAU'}}
                    />
                </View>
            </View>

            <View style={{height: 40}} />
            <TouchableOpacity onPress={() => Submit()}>
                <LinearGradient
                    colors={['#FFC750', '#FF540B']}
                    style={{
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: '#FF540B',
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: 'white',
                        alignSelf: 'center'
                    }}>
                        Submit Post
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
            <View style={{height: 32}} />
            <Modal
                visible= {modalIsOpen}
                transparent={true}
            >
                <View style={{flex: 1, justifyContent: 'center',backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 30,
                        width: "85%",
                        height: 120,
                        backgroundColor: "white",
                        borderRadius: 15,
                    }}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{message}</Text>
                        <View style={{height: 20}}/> 
                        <TouchableOpacity onPress={() => {setModalIsOpen(false); navigation.navigate('AllPost')}}
                            style={{
                                height: 30,
                                width: '30%',
                                borderRadius: 20,
                                backgroundColor: '#4CBB17',
                                justifyContent: 'center'
                            }}
                        >
                            <Text style={{
                                fontSize: 14,
                                fontWeight: '600',
                                color: 'white',
                                alignSelf: 'center'
                            }}>
                                Ok
                            </Text>
                        </TouchableOpacity>
                    </View> 
                </View>
            </Modal>
        </ScrollView>
    )
}

export default JobPreview;