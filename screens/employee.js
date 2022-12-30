import { StyleSheet, Text, View ,Button } from 'react-native';
import { styles } from "../styles/styles"
import { useState, useEffect} from 'react';
import axios from 'axios';

const Home = ({navigation}) => {
  const [ufname,setufname]=useState('')
  const [ulname,setulname]=useState('')
  const [uDepartment,setuDepartment]=useState('')

  const [posts,setPosts]=useState([])
  const fetchData=()=>{
    axios.get('http://127.0.0.1:8000/emplist/')
    .then((Response)=> setPosts(Response.data))
    .catch((err)=>console.log(err))
  }
  const deleteData=(id)=>{
      axios.delete(`http://127.0.0.1:8000/empupdate/${id}`)
      .then((Response)=> alert('successfully deleted'),fetchData())
      .catch((err)=>console.log(err))
    }
  
  const pressHandler=()=>{
    navigation.navigate('student')
  }
  const pressHandlerContact=()=>{

    navigation.navigate('teachers')
    
  }
  

  return (
    
    <View style={styles.container}  >
      
      
      <Button title='student' onPress={pressHandler}/>
      <Button title='teachers' onPress={pressHandlerContact}/>
      <Text style={styles.item}>EMPLOYEE PAGE</Text>
      { posts.map((post)=>{
      return (
        <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>
                    First Name: {post.fname} <br></br>
                    Last Name:{post.lname} <br></br> 
                    grade: {post.grade}<br></br>
                <button onClick={()=>deleteData(post.id)}>Delete</button>
        </Text>
      ) 
    })} 
    </View>
  )
}


export default Home