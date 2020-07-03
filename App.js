// import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Image, Linking} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default function App() {
  const [details,setDetails]=useState({name:'University of Peradeniya',location:'Peradeniya,Kandy',faculties:9,officers:'Chancellor,Vice chancellor,Deans of Faculties'});
  const [faculties,setFaculties]=useState([
            {name:'Faculty of Medicine',key:'1'},
            {name:'Faculty of Engineering	',key:'2'},
            {name:'Faculty of Science',key:'3'},
            {name:'Faculty of Dental Sciences',key:'4'},
            {name:'Faculty of Veterinary Medicine and Animal Science',key:'5'},
            {name:'Faculty of Arts',key:'6'},
            {name:'Faculty of Allied Health Sciences',key:'7'},
            {name:'Faculty of Agriculture',key:'8'},
            {name:'Faculty of Management',key:'9'},

  ]);

  const[culturclubs,setculturclubs]=useState([
    {name:'Ceylon University Dramatic Society (DramSoc)',key:'1'},
    {name:'Film Society (FilmSoc)',key:'2'},
    {name:'Gandarwa Sabhawa',key:'3'},
    {name:'Sinhala Natya Mandalaya',key:'4'},
    {name:'Sinhala Sangamaya',key:'5'},
    {name:'Tamil Sangeetha Natya Sangam',key:'6'},
    {name:'Tamil Society',key:'7'},
    
]);


  const[religclubs,setreligclubs]=useState([
    {name:'Buddhist Brotherhood',key:'1'},
    {name:'Hindu Students Union',key:'2'},
    {name:'Newman Society (for Roman Catholics)',key:'3'},
    {name:'Student Christian Movement',key:'4'},
    {name:'University Buddhist Society',key:'5'},
    {name:'University Muslim Majlis',key:'6'},

]);

  const[otherclubs,setOtherclubs]=useState([
    {name:'Computer Society University of Peradeniya (CSUP)',key:'1'},
    {name:'Zoologists Association	',key:'2'},
    {name:'University Geological Society',key:'3'},
    {name:'Hantana Conservation Society',key:'4'},
    {name:'AIESEC in University of Peradeniya',key:'5'},
    {name:'Arunachalum-Hall Alumni Association',key:'6'},
    {name:'University Gavel Club',key:'7'},
    {name:'Rotaract Club',key:'8'},
    {name:'Sports Council',key:'9'},
    {name:'Student Meditation Society',key:'10'},
    


]);
const[count,setCount]=useState({academicstaff:731,adminstaff:2973,undergrastudents:9605,postgradstudents:1440});



  return (
    <View style={styles.container}>
     <ScrollView> 
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width: 350, height: 50, backgroundColor: '#F26B8A'}} >
        <Text style={styles.headertopic}>{details.name}</Text>
        </View>

        <View style={styles.imgbackground}>
        <Image style={styles.img} source={require('./images/image1.jpg')}/>
        </View>

        <View style={styles.firstspace}>
        <Text style={styles.headertopic} onPress={()=>Linking.openURL('https://www.google.lk/maps/place/University+of+Peradeniya/')}>1.Location-: {details.location}</Text>
        <Text style={styles.headertopic}>2.Number of Faculties-: {details.faculties}</Text>
        <Text style={styles.headertopic}>3.Officers-: {details.officers}</Text> 
        <Text style={styles.headertopic}>4.Faculties</Text>
        </View> 

        <View style={styles.contentspace}>
        <ScrollView>
        {faculties.map((item)=>{
          return(
            <View key={item.key}>
            <Text style={styles.facul}>{item.name}</Text>
            </View>
          )
        })}
        </ScrollView>
        </View>
        <View style={styles.whitespace}></View>
        <View style={styles.topicspace}>
        <Text style={styles.headertopic}>5.Club and Societies</Text>
        </View>
        <View style={styles.pinkspace}>
        <Text style={styles.headertopic}>-Cultural Clubs-</Text>
        </View>
        <View style={styles.contentspace}>
        <ScrollView>
        {culturclubs.map((item)=>{
          return(
            <View key={item.key}>
            <Text style={styles.facul}>{item.name}</Text>
            </View>
          )
        })}
        </ScrollView>
        </View>

        <View style={styles.pinkspace}>
        <Text style={styles.headertopic}>-Religious Clubs-</Text>
        </View>
        <View style={styles.contentspace}>
        <ScrollView>
        {religclubs.map((item)=>{
          return(
            <View key={item.key}>
            <Text style={styles.facul}>{item.name}</Text>
            </View>
          )
        })}
        </ScrollView>
        </View>

        <View style={styles.pinkspace}>
        <Text style={styles.headertopic}>-Other Clubs-</Text>
        </View>
        <View style={styles.contentspace}>
        <ScrollView>
        {otherclubs.map((item)=>{
          return(
            <View key={item.key}>
            <Text style={styles.facul}>{item.name}</Text>
            </View>
          )
        })}
        </ScrollView>
        </View>

        {/* count part */}

        <View style={styles.whitespace}></View>

        <View style={styles.topicspace}>

        <Text style={styles.headertopic}>6.Count</Text>
        </View>

        <View style={styles.pinkspace}>
        <Text style={styles.headertopic}>Staff</Text>
        </View>
        <View style={{width: 350, height: 320, backgroundColor: 'white'}}>

        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.countview1}><Text style={styles.facul}>Academic Staff- {count.academicstaff}</Text></View>
        <View style={styles.countview2}><Text style={styles.facul}>Administrative Staff- {count.adminstaff}</Text></View>
        </View>

        <View style={styles.pinkspace}>
        <Text style={styles.headertopic}>Students</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.countview2}><Text style={styles.facul}>Undergraduate Students- {count.undergrastudents}</Text></View>
        <View style={styles.countview1}><Text style={styles.facul}>Postgraduate Students- {count.postgradstudents}</Text></View>
        
        </View>
        
      
        </View>
        <View style={styles.greyspace}><Text style={styles.websitetext} onPress={()=>Linking.openURL('https://www.pdn.ac.lk/')}>www.pdn.ac.lk</Text></View>

  
      </View>



        
      </ScrollView>
      

    </View>
  );
} 





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position:'relative',
    top:50,
  },

  headertopic:{
    color:'white',
    padding:10,
    // backgroundColor:'#F26B8A',
    fontSize:20,
    alignItems: 'center',
    fontFamily:'sans-serif-thin',
  },
  facul:{
    color:'black',
    padding:10,
    // backgroundColor:'#F26B8A',
    fontSize:20,
    alignItems: 'center',
    fontFamily:'sans-serif-light',
    
  },

  img:{
    width:350,
    height:200,
    position:'relative',
    top:26,
  },

  pinkspace:{
    width: 350, 
    height: 40,
    backgroundColor: '#F26B8A'
  },

  whitespace:{
    width: 350,
     height: 20,
      backgroundColor: 'white'
    },


    topicspace:{
      width: 350,
      height: 40,
      backgroundColor: 'steelblue'
    },

    contentspace:{
      width: 350,
       height: 300, 
       backgroundColor: 'skyblue',
    },
    firstspace:{
      width: 350,
      height: 200,
      backgroundColor: 'steelblue',
    },

    imgbackground:{
      width: 350,
      height: 250,
      backgroundColor: 'white',
    },
    countview1:{
      width: 175,
      height: 100,
      backgroundColor: 'skyblue',
    },

    countview2:{
      width: 175,
      height: 100,
      backgroundColor: 'steelblue', 
    },

    greyspace:{
      width: 350,
     height: 90,
      backgroundColor: 'grey',
      position:'relative',
      bottom:0,
    },
    websitetext:{
      color:'white',
      padding:5,
      // backgroundColor:'#F26B8A',
      fontSize:20,
      alignItems: 'center',
      fontFamily:'sans-serif-light',
    },
    
  
});
