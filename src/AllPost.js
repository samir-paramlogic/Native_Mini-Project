import React, { useEffect } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, ImageBackground, ActivityIndicator, RefreshControl } from "react-native";
import { useQuery } from "react-query";
import axios from "axios";

const AllPost = ({navigation}) => {

    const {
        data:postData,
        isLoading,
        refetch,
        isRefetching
    } = useQuery('postData', async() => {
        return await axios.get('http://192.168.135.94:3001/api/post')
        .then(data => (data.data))
        .catch(e => e)
    })
    // console.log(postData, "data")

    useEffect(() => {
        refetch();
    }, [])

    return(
        <View style={{
            height: '100%',
            backgroundColor: 'white',
        }}>
            <View style={{
                height: 64,
                flexDirection: 'row',
                paddingHorizontal: 16,
                paddingVertical: 16
            }}>
                <Image source={require('../assets/profile2.png')}
                    style={{width: 32, height: 32, borderRadius: 32}}
                />
                <View style={{width: 16}}/>
                <View style={{
                    height: 32,
                    width: '47%',
                    paddingHorizontal: 16,
                    borderRadius: 40,
                    backgroundColor: '#F6F6FE',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        color: '#282C3F',
                        fontSize: 14,
                        fontWeight: '600'
                    }}>
                        Army Public School
                    </Text>
                    <Image source={require('../assets/arrow-down.png')}
                        style={{width: 10, height: 7}}
                    />
                </View>
                <View style={{width: '20%'}}/>
                <View style={{
                    height: 32,
                    width: 32,
                    backgroundColor: '#F6F6FE',
                    borderRadius: 32,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image source={require('../assets/union-icon.png')}
                        style={{width: 19, height: 16}}
                    />
                </View>
                <View style={{width: 8}} />
                <View style={{
                    height: 32,
                    width: 32,
                    backgroundColor: '#F6F6FE',
                    borderRadius: 32,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image source={require('../assets/bell-icon.png')}
                        style={{width: 14, height: 16}}
                    />
                </View>
            </View>
            <View style={{ height: 65,flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16 }}>
                <View style={{ height: 65, width: 70 }}>
                    <View style={{justifyContent: 'center', alignItems:'center', paddingTop: 12}}>
                        <Image source={require('../assets/focused.png')}
                            style={{ height: 24, width: 24}}
                        />
                    </View>
                    <View style={{justifyContent: 'flex-end', alignItems:'center'}}>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '600', 
                            color: '#282C3F',
                            alignSelf: 'center' ,
                            marginTop: 5 
                        }}>
                            Focused
                        </Text>
                        <View style={{
                            height: 2, 
                            width: 42,
                            backgroundColor: '#E46D47',
                            marginTop: 5
                        }}/>
                    </View>
                </View>
                <View style={{ height: 65, width: 70 }}>
                    <View style={{justifyContent: 'center', alignItems:'center', paddingTop: 8}}>
                        <Image source={require('../assets/social.png')}
                            style={{ height: 32, width: 32}}
                        />
                    </View>
                    <Text style={{
                        fontSize: 12, 
                        color: '#282C3F',
                        alignSelf: 'center'  
                    }}>
                        Social
                    </Text>
                </View>
                <View style={{ height: 65, width: 70 }}>
                    <View style={{justifyContent: 'center', alignItems:'center', paddingTop: 8}}>
                        <Image source={require('../assets/jobs.png')}
                            style={{ height: 32, width: 32}}
                        />
                    </View>
                    <Text style={{
                        fontSize: 12,
                        color: '#282C3F',
                        alignSelf: 'center'  
                    }}>
                        Jobs
                    </Text>
                </View>
                <View style={{ height: 65, width: 70 }}>
                    <View style={{justifyContent: 'center', alignItems:'center', paddingTop: 8}}>
                        <Image source={require('../assets/memories.png')}
                            style={{ height: 32, width: 32}}
                        />
                    </View>
                    <Text style={{
                        fontSize: 12,
                        color: '#282C3F',
                        alignSelf: 'center'  
                    }}>
                        Memories
                    </Text>
                </View>
            </View>
            <View style={{ height: 40,
                flexDirection: 'row', 
                backgroundColor: '#EE44441A', 
                paddingHorizontal: 16,
                marginBottom: 8
            }}>
                <Image source={require('../assets/alert.png')}
                    style={{ height: 36, width: 40, marginTop: 8}}
                />
                <View style={{ justifyContent: 'center', marginLeft: 15}}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '700',
                        color: '#EE4444'
                    }}>
                        Emergency! Urgent Attention Required
                    </Text>
                </View>
            </View>
            {isLoading ? (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size="large"/>
                </View>
            ) : (
                <ScrollView 
                    refreshControl={
                        <RefreshControl onRefresh={refetch} refreshing={isRefetching} />
                    }
                >
                    {postData && postData.map((post) => {
                        return(
                            <View key={post._id}>
                                <View style={{paddingHorizontal: 16}}>
                                    <View style={{ height: 24}}/>
                                    <TouchableOpacity onPress={() => navigation.navigate('ShowPost', post._id)}>
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
                                                        posted a
                                                    </Text>
                                                    <Text style={{
                                                        fontSize: 14,
                                                        color: '#E46D47',
                                                        fontWeight: '600',
                                                        paddingLeft: 5
                                                    }}>
                                                        News
                                                    </Text>
                                                </View>
                                                <Text style={{
                                                    fontSize: 10,
                                                    color: '#282C3F',
                                                }}>
                                                    12 mins ago
                                                </Text>
                                            </View>
                                            <View style={{ justifyContent: 'center'}}>
                                                <Image source={require('../assets/solid-ellipse.png')} 
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
                                            {post.post}
                                        </Text>
                                    </ImageBackground>
                                    <View style={{ height: 16}}/>
                                    <Text style={{
                                        fontSize: 14,
                                        fontWeight: '300',
                                        color: '#282C3F'
                                    }}>
                                        {post.description}
                                        <Text style={{
                                            fontSize: 14,
                                            color: '#E46D47'
                                        }}>
                                            ... Read More
                                        </Text>
                                    </Text>
                                    </TouchableOpacity>
                                    <View style={{height: 10}} />
                                    <Text style={{
                                        fontSize: 14,
                                        color: '#035C92'
                                    }}>
                                        @Nikhil Rawat, @Pratik Jaiswal
                                    </Text>
                                    <View style={{ height: 16}}/>
                                    <View style={{flexDirection: 'row'}}>
                                        <Image source={require('../assets/like.png')} 
                                            style={{width: 16, height: 16}}    
                                        />
                                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                                            <Text style={{
                                                fontSize: 12,
                                                color: '#7D7F8B',
                                                paddingLeft: 6,
                                            }}>
                                                John doe and 8 others
                                            </Text>
                                            <Text style={{
                                                fontSize: 12,
                                                color: '#7D7F8B',
                                                paddingLeft: 6,
                                            }}>
                                                13 Comments . 2 Shares
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ height: 16}}/>
                                    <View style={{ height: 1, backgroundColor: '#EAEAEC'}}/>
                                    <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <Image source={require('../assets/solidHeart.png')} 
                                                style={{width: 16, height: 14}}    
                                            />
                                            <Text style={{
                                                fontSize: 14,
                                                color: '#E46D47',
                                                paddingLeft: 6,
                                            }}>
                                                Like
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <Image source={require('../assets/regular-comment.png')} 
                                                style={{width: 14, height: 14}}    
                                            />
                                            <Text style={{
                                                fontSize: 14,
                                                color: '#282C3F',
                                                paddingLeft: 6,
                                            }}>
                                                Comment
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <Image source={require('../assets/solid-share.png')} 
                                                style={{width: 12, height: 14}}    
                                            />
                                            <Text style={{
                                                fontSize: 14,
                                                color: '#282C3F',
                                                paddingLeft: 6,
                                            }}>
                                                Share
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ height: 2, backgroundColor: '#EAEAEC'}}/>
                            </View>
                        )
                    })}
                    <View style={{ height: 56}}/>
                </ScrollView>
            )}
            
            {/* Footer content */}
            <View style={{ 
                position: 'absolute',
                bottom: 0,
                left: 0,
                right:0
            }}>
                <View style={{ height: 56, 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    justifyContent: 'space-around', 
                    borderTopColor: '#EAEAEC',
                    borderBottomColor: 'white',
                    borderLeftColor: 'white',
                    borderRightColor: 'white',
                    borderWidth: 1,
                    backgroundColor: 'white'
                }}>
                    <Image source={require('../assets/solid-home.png')} 
                        style={{width: 21, height: 16}}
                    />
                    <Image source={require('../assets/address-book.png')} 
                        style={{width: 14, height: 16}}    
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('JobPost')}>
                        <Image source={require('../assets/Plus-icon.png')} 
                            style={{width: 40, height: 40}}    
                        />
                    </TouchableOpacity>
                    <Image source={require('../assets/regular-envelope.png')} 
                        style={{width: 21, height: 16}}    
                    />
                    <Image source={require('../assets/graduation-cap.png')} 
                        style={{width: 26, height: 16}}    
                    />
                </View>
            </View>
        </View>
    )
}

export default AllPost;