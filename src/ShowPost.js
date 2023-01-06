import React,{useState, useEffect} from "react";
import {Image, Text, View, TouchableOpacity, ImageBackground, Modal, Alert, ScrollView } from "react-native";
import axios from "axios";
// import { useQuery } from "react-query";

const ShowPost = ({route, navigation}) => {
    //console.log(route.params, "route")

    const ID = route.params

    const [message, setMessage] = useState('')
    const [data, setData] = useState([])
    const [modalIsOpen, setModalIsOpen] =  useState(false)

    const fetchdata = async () => {
        await axios.post(`http://192.168.135.94:3001/api/post/show?postID=${ID}`)
        .then((res) => {
            setData(res.data)
        })
        .catch(e => e)
    };
    useEffect(() => {
        fetchdata();
    },[])
    // console.log(data, "fetchdata")
    // const {dataaa, refetch} = useQuery('dataaa', async() => {
    //     return await axios.get('http://192.168.135.94:3001/api/post')
    // })

    const deletePost = async(postID) => {
        await axios.post(`http://192.168.135.94:3001/api/post/delete?postID=${postID}`)
        .then(response => {setMessage(response.data.message);setModalIsOpen(true)})
        .catch(error => {setMessage(error.data.message);setModalIsOpen(true)})
        
        // navigation.navigate('AllPost')
    }

    return(
        <ScrollView style={{
            height: '100%',
            paddingHorizontal: 16,
            backgroundColor: 'white'
        }}>
            <View style={{
                height: 64,
                display: 'flex',
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row'
            }}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Image source= {require('../assets/arrow-left.png')} />
                    <View style={{width: 16}} />
                    <Text style={{
                        fontSize: 18,
                        color: '#282C3F',
                        margin: 0
                        }}>
                            Post
                    </Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{
                        height: 32,
                        width: 32,
                        backgroundColor: '#F6F6FE',
                        borderRadius: 32,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source= {require('../assets/regularHeart.png')} />
                    </View>
                    <View style={{width: 16}} />
                    <Image source={{uri:'https://freeiconshop.com/wp-content/uploads/edd/share-flat.png'}} 
                        style={{width: 28, height: 28}}
                    />
                </View>
            </View> 
            <View key={data._id}>
                <View style={{ height: 24}}/>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../assets/profile1.png')} 
                        style={{width: 24, height: 24}}
                    />
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1}}>
                        <View style={{ flexDirection: 'column',  paddingLeft: 10}}>
                            <View style={{ flexDirection: 'row'}}>
                                <Text style={{
                                    fontSize: 14,
                                    color: '#7D7F8B',
                                    fontWeight: '600'
                                }}>
                                    Sameer
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    color: '#7D7F8B',
                                    paddingLeft: 5
                                }}>
                                    posted
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    color: '#E46D47',
                                    fontWeight: '600',
                                    paddingLeft: 5
                                }}>
                                    event
                                </Text>
                            </View>
                            <Text style={{
                                fontSize: 10,
                                color: '#282C3F',
                            }}>
                                12 min ago
                            </Text>
                        </View>
                        <View style={{ justifyContent: 'center'}}>
                            <Image source={require('../assets/Hdot.png')}
                                style={{width: 16, height: 5}}
                            /> 
                        </View>
                    </View>
                </View>
                <View style={{ height: 12}}/>
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
                        {data.post}
                    </Text>
                </ImageBackground>
                <View style={{ height: 16}}/>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '300',
                    color: '#282C3F'
                }}>
                    {data.description}
                </Text>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '300',
                    color: '#282C3F',
                    marginTop: 5
                }}>
                    Job Profile : {data.jobProfile}
                </Text>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '300',
                    color: '#282C3F',
                    marginTop: 5
                }}>
                    Company : {data.company}
                </Text>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '300',
                    color: '#282C3F',
                    marginTop: 5
                }}>
                    Experience : {data.experience}
                </Text>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '300',
                    color: '#282C3F',
                    marginTop: 5
                }}>
                    Location : {data.location}
                </Text>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '300',
                    color: '#282C3F',
                    marginTop: 5
                }}>
                    Url ( if any ) : {data.url}
                </Text>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '300',
                    color: '#282C3F',
                    marginTop: 5
                }}>
                    Phone Number : {data.phoneNo}
                </Text>
                
                <View style={{height: 10}} />
                <Text style={{
                    fontSize: 14,
                    color: '#035C92'
                }}>
                    @Advik Adamapure, @Dipak Patil
                </Text>
                <View style={{ height: 16}}/>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('UpdatePost',data)}}
                        style={{
                            height: 40,
                            width: '40%',
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
                            Update
                        </Text>
                    </TouchableOpacity>
                    <View style={{ width: 25}}/>
                    <TouchableOpacity onPress={() => deletePost(data._id)}
                        style={{
                            height: 40,
                            width: '40%',
                            borderRadius: 20,
                            backgroundColor: '#E50027',
                            justifyContent: 'center'
                        }}
                    >
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            color: 'white',
                            alignSelf: 'center'
                        }}>
                            Delete
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 20}}/>
                {/* <View style={{flexDirection: 'row'}}>
                    <Image source={post.likeImg} 
                        style={{width: 16, height: 16}}    
                    />
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{
                            fontSize: 12,
                            color: '#7D7F8B',
                            paddingLeft: 6,
                        }}>
                            {post.likeName}
                        </Text>
                        <Text style={{
                            fontSize: 12,
                            color: '#7D7F8B',
                            paddingLeft: 6,
                        }}>
                            {post.CStext}
                        </Text>
                    </View>
                </View>
                <View style={{ height: 16}}/>
                <View style={{ height: 1, backgroundColor: '#EAEAEC'}}/>
                <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={post.heartImg} 
                            style={{width: 16, height: 14}}    
                        />
                        <Text style={{
                            fontSize: 14,
                            color: '#E46D47',
                            paddingLeft: 6,
                        }}>
                            {post.like}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={post.commentImg} 
                            style={{width: 14, height: 14}}    
                        />
                        <Text style={{
                            fontSize: 14,
                            color: '#282C3F',
                            paddingLeft: 6,
                        }}>
                            {post.comment}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={post.shareImg} 
                            style={{width: 12, height: 14}}    
                        />
                        <Text style={{
                            fontSize: 14,
                            color: '#282C3F',
                            paddingLeft: 6,
                        }}>
                            {post.share}
                        </Text>
                    </View>
                </View> */}
                {/* <View style={{ height: 2, backgroundColor: '#EAEAEC'}}/> */}
            </View>

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
                        <TouchableOpacity onPress={() => {
                                setModalIsOpen(false); 
                                navigation.navigate('AllPost')
                            }}
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

export default ShowPost;