import React, {Component} from 'react';
import {StyleSheet, 
Text,
View,
TextInput, 
ScrollView,
TouchableOpacity } from 'react-native';
import Note from './Note';

export default class Main extends Component<Props> {
	constructor(props){
		super(props);
		this.state ={
			noteArray:[],
			noteText: '',
		}
	}

  render() {
  		let notes = this.state.noteArray.map((val , key) => {return < Note key={key} keyval={key} val={val} deleteMethod={()=> this.deleteNote(key)} /> });
    return (
      <View style={styles.container}>
       		<View style={styles.header}>
       			<Text style={styles.headerText}>
       				Noter
       			</Text>
       		</View>
       		<ScrollView style={styles.ScrollContainer}>
       			{notes}
       		</ScrollView>
       		<View style={styles.footer}>
       			<TextInput 
       			style={	styles.textInput} 
       			onChangeText={(noteText)=>this.setState({noteText})}
       			placeholder='>note'
       			placeholderTextColor='white'
       			underlineColorAndroid='transparent'
       			>

       			</TextInput>

       		</View>
       		<TouchableOpacity style={styles.addButton} onPress={this.addnote.bind(this)}>
       			<Text>
       				+
       			</Text>
       		</TouchableOpacity>
      </View>
    );
  }
// .........................................................................
  addnote(){
  	if (this.state.noteText) {
  		var d= new Date();
  		this.state.noteArray.push({
  			'date': d.getFullYear()+
  			"/" + (d.getMonth() + 1 )+
  			"/" + d.getDate(),
  			'note': this.state.noteText
  		});
  		this.setState({noteArray: this.state.noteArray})
  		this.setState({noteText: ''}); 
  	}
  }

  deleteNote(key){
  	this.state.noteArray.splice(key)
  	this.setState({noteArray: this.state.noteArray})
  }
}
// ...................................................................
const styles = StyleSheet.create({
  container: {
    	flex:1,
  }, 

  header: {
    	backgroundColor: '#E91E63',
    	alignItems: 'center',
    	justifyContent: 'center',
    	borderBottomWidth: 10,
    	borderBottomColor: '#ddd',

  }, 

  headerText: {
    	color:'white',
    	fontSize: 18,
    	padding: 26,
  }, 

  ScrollContainer: {
    	flex:1,
    	marginBottom: 100
  }, 

  footer: {
    	position:'absolute',
    	bottom: 0,
    	left: 0,
    	right: 0,
    	zIndex: 10,
  }, 
  textInput: {
    	alignSelf:'stretch',
    	color:'#fff',
    	padding:20,
    	borderTopWidth:2,
    	backgroundColor:'#252525',
    	borderTopColor: '#ededed'
  }, 
  addButton:{
  	position: 'absolute',
  	zIndex: 11,
  	right: 20,
  	bottom: 90,
  	backgroundColor:'#E91E63',
  	width: 90,
  	height: 90,
  	borderRadius: 50,
  	alignItems:'center',
  	justifyContent:'center',
  	elevation: 8,
  },
  addButtonText:{
  	color:'#fff',
  	fontSize: 24,
  }
});
