import React from "react";
import { ScrollView, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useFormik } from "formik";

const JobPost = ({navigation}) => {

    const {handleChange, handleSubmit, values} = useFormik({
        initialValues: {
            post: '',
            jobProfile: '',
            company: '',
            experience: '',
            location: '',
            url: '',
            description: '',
            phoneNo: ''
        },
        onSubmit: values => {
            // console.log(values, "values")
            navigation.navigate('JobPreview', values)
        }
    })

    return (
        <ScrollView style={{paddingHorizontal:18, backgroundColor: 'white'}}>
            <View style={{
                height: 64,
                backgroundColor: 'white',
                paddingTop: 32,
            }}>
                <Image source={require('../assets/arrow-left.png')} />
            </View>
            <Text style={{
                fontSize: 24,
                fontWeight: '600',   
            }} >
                Job Post
            </Text>

            <View style={{height: 17}} />
            <Text>
                Either your are looking for a job or there are new job openings in your company share it with your batchmates
            </Text>
            <View style={{height: 14}} />
            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#035C92',
                        height: 16,
                        width: 16,
                        borderRadius: 16
                    }} />
                    <Text style={{
                        fontSize: 12,
                        color: '#363636',
                        marginLeft: 6
                    }}>
                        I am Hiring
                    </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#035C92',
                        height: 16,
                        width: 16,
                        borderRadius: 16
                    }} />
                    <Text style={{
                        fontSize: 12,
                        color: '#363636',
                        marginLeft: 6,
                        marginRight: 22
                    }}>
                        I am looking for a job
                    </Text>
                </View>
            </View>
            <View style={{height: 17}} />
            <LinearGradient
                // Background Linear Gradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#64E8DE', '#8A64EB']}
                style={{
                    borderRadius: 10,
                    paddingHorizontal: 16
                }}
            >
                <View style={{height: 48}} />
                <TextInput 
                    style={{
                        borderRadius: 5,
                        height: 40,
                        fontWeight: "bold",
                        fontSize: 18,
                        borderColor: "#F9F9F9",
                        borderWidth: 1,
                        borderStyle: "dashed",
                        paddingLeft: 15,
                    }}
                    placeholder="Write Your Post"
                    onChangeText={handleChange('post')}
                />
                <View style={{
                    flexDirection: "row",
                    marginTop: 30
                }}>
                    <Image source={require("../assets/rect1.png")} />
                    <Image source={require("../assets/rect2.png")} />
                    <Image source={require("../assets/rect3.png")} />
                    <Image source={require("../assets/rect4.png")} />
                    <Image source={require("../assets/rect5.png")} />
                    <Image source={require("../assets/rect6.png")} />
                    <Image source={require("../assets/rect9.png")} />
                    <Image source={require("../assets/rect7.png")} />
                    <Image source={require("../assets/rect8.png")} />
                </View>
            </LinearGradient>
            <View style={{height: 24}} />
            <View style={{flexDirection: 'row'}}>
                <View style={{
                    borderColor: "#D4D5D9",
                    borderWidth: 2,
                    borderRadius: 4,
                    height: 80,
                    width: 73,
                    backgroundColor: "#F5F6FB",
                    alignItems: 'center'
                }}>
                    <View style={{height: 10}} />
                    <Image source={require('../assets/photo.png')} />
                    <Text style={{
                        fontSize: 10,
                        color: '#858792',
                        marginBottom: 8,
                        marginTop: 6
                    }}>
                        Add Image
                    </Text>
                    <TouchableOpacity
                        style={{
                        borderRadius: 20,
                        backgroundColor: "#E46D47",
                        alignItems: "center",
                        justifyContent: 'center',
                        width: 60,
                        height: 17,
                        marginBottom: 13
                        }}
                    >
                        <Text
                        style={{
                            color: "#ffffff",
                            fontSize: 8,
                        }}
                        >
                            Upload
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={{
                    color: "#858792",
                    fontSize: 14,
                    alignSelf: 'center',
                    marginHorizontal: 16
                }}>
                    Or
                </Text>
                <View style={{flexDirection: 'column'}}>
                    <Text style={{
                        color: "#035C92",
                        fontSize: 14,
                        fontWeight: '600',
                        marginBottom: 8
                    }}>
                        Select Template
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{
                                borderWidth: 2,
                                borderColor: '#DFDFE2',
                                height: 40,
                                width: 40,
                                borderRadius: 40
                            }} />
                            <Text style={{
                                color: "#282C3F",
                                fontSize: 12,
                            }}>
                                Keyword
                            </Text>
                        </View>
                        <View style={{flexDirection: 'column', marginLeft: 18}}>
                            <View style={{
                                borderWidth: 2,
                                borderColor: '#DFDFE2',
                                height: 40,
                                width: 40,
                                borderRadius: 40
                            }} />
                            <Text style={{
                                color: "#282C3F",
                                fontSize: 12,
                            }}>
                                Keyword
                            </Text>
                        </View>
                        <View style={{flexDirection: 'column', marginLeft: 18}}>
                            <View style={{
                                borderWidth: 2,
                                borderColor: '#DFDFE2',
                                height: 40,
                                width: 40,
                                borderRadius: 40
                            }} />
                            <Text style={{
                                color: "#282C3F",
                                fontSize: 12,
                            }}>
                                Keyword
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{height: 32}} />
            <View style={{
                height: 32,
                borderWidth:1.5,
                borderColor:'#D4D5D9',
                borderRadius:4,
                paddingHorizontal: 14,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <TextInput
                    style={{
                    }}
                    placeholder="Job Profile"
                    onChangeText={handleChange('jobProfile')}
                />
                <Image source={require('../assets/arrow-down.png')} />
            </View>
            <View style={{height: 16}} />
            <View style={{
                height: 32,
                borderWidth:1.5,
                borderColor:'#D4D5D9',
                borderRadius:4,
                paddingHorizontal: 14,
            }}>
                <TextInput
                    style={{
                    }}
                    placeholder="Company"
                    onChangeText={handleChange('company')}
                />
            </View>
            <View style={{height: 16}} />
            <View style={{flexDirection: 'row'}}>
                <View style={{
                    height: 32,
                    width: '48%',
                    borderWidth:1.5,
                    borderColor:'#D4D5D9',
                    borderRadius:4,
                    paddingHorizontal: 14,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <TextInput
                        style={{
                        }}
                        placeholder="Experience"
                        onChangeText={handleChange('experience')}
                    />
                    <Image source={require('../assets/arrow-down.png')} />
                </View>
                <View style={{width: 15}} />
                <View style={{
                    height: 32,
                    width: '48%',
                    borderWidth:1.5,
                    borderColor:'#D4D5D9',
                    borderRadius:4,
                    paddingHorizontal: 14,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <TextInput
                        style={{
                        }}
                        placeholder="Location"
                        onChangeText={handleChange('location')}
                    />
                    <Image source={require('../assets/arrow-down.png')} />
                </View>
            </View>
            <View style={{height: 16}} />
            <View style={{
                height: 32,
                borderWidth:1.5,
                borderColor:'#D4D5D9',
                borderRadius:4,
                paddingHorizontal: 14,
            }}>
                <TextInput
                    style={{
                    }}
                    placeholder="Url ( if any )"
                    onChangeText={handleChange('url')}
                />
            </View>
            <View style={{height: 16}} />
            <View style={{
                height: 105,
                borderWidth:1.5,
                borderColor:'#D4D5D9',
                borderRadius:4,
                paddingHorizontal: 14,
            }}>
                <TextInput
                    style={{
                    }}
                    multiline={true}
                    numberOfLines={4}
                    placeholder="Description"
                    onChangeText={handleChange('description')}
                />
            </View>
            <View style={{height: 16}} />
            <Text style={{
                fontSize: 14,
                color: '#035C92'
            }}>
                Contact Person
            </Text>
            <View style={{height: 16}} />
            <View style={{flexDirection: 'row'}}>
                <View style={{
                    height: 32,
                    width: 70,
                    borderWidth:1.5,
                    borderColor:'#D4D5D9',
                    borderRadius:4,
                    paddingHorizontal: 14,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <TextInput
                        style={{
                        }}
                        placeholder="91"
                        onChangeText={handleChange('phoneNo')}
                    />
                    <Image source={require('../assets/arrow-down.png')} />
                </View>
                <View style={{width: 16}} />
                <View style={{
                    height: 32,
                    width: '75%',
                    borderWidth:1.5,
                    borderColor:'#D4D5D9',
                    borderRadius:4,
                    paddingHorizontal: 14,
                }}>
                    <TextInput
                        style={{
                        }}
                        placeholder="Phone Number"
                        onChangeText={handleChange('phoneNo')}
                    />
                </View>
            </View>
            <View style={{height: 32}} />
            <TouchableOpacity 
                onPress={handleSubmit}
            >
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
        </ScrollView>
    )
}

export default JobPost;