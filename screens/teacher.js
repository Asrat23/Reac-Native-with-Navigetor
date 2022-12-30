import { StyleSheet, Text, View ,Button } from 'react-native';
import { styles } from "../styles/styles";
import axios from 'axios';
import { useState, useEffect} from 'react';
const ContactUs = ({navigation}) => {
  const [ufname,setufname]=useState('')
  const [ulname,setulname]=useState('')
  const [uDepartment,setuDepartment]=useState('')

  const [posts,setPosts]=useState([])
  const fetchData=()=>{
    axios.get('http://127.0.0.1:8000/teachlist/')
    .then((Response)=> setPosts(Response.data))
    .catch((err)=>console.log(err))
  }
  const deleteData=(id)=>{
      axios.delete(`http://127.0.0.1:8000/teachupdate/${id}`)
      .then((Response)=> alert('successfully deleted'),fetchData())
      .catch((err)=>console.log(err))
    }
    // const setData=(Id)=>{
    //   axios.post('http://127.0.0.1:8000/teachlist/',{fname:ufname,lname:ulname,salary:uDepartment}) 
    //   .then((res)=> {alert('New Teacher is added Successfully');fetchData();})
      
    //   .catch((err)=>alert('Failed'))
    // }
  useEffect(()=>{fetchData()},[])
  const pressHandler=()=>{
    navigation.navigate('student')
  }

  const pressHandlerHome=()=>{
    navigation.navigate('Employee')
  }

  return (
    
    <View style={styles.container} >
      <Button title='Employee' onPress={pressHandlerHome}/>
      <Button title='student' onPress={pressHandler}/>
      <Text style={styles.item}>TEACHERS PAGE</Text>
    
      { posts.map((post)=>{
      return (
        <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>
                    First Name: {post.fname} <br></br>
                    Last Name:{post.lname} <br></br> 
                    Salary: {post.salary}<br></br>
                <button onClick={()=>deleteData(post.id)}>Delete</button>
        </Text>
      ) 
    })} 
    </View>
  )
}


export default ContactUs