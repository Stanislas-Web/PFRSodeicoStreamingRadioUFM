import React,{useState} from 'react'
import { Input, Button, Form } from 'semantic-ui-react'

const Formulaire = ()=>{
    const [titre, setTitre] = useState('');
    const [url, setUrl] = useState('');
    const [image, setImage] = useState('');

const uploadImage = ()=>{


        const data = new FormData()
        data.append("file",url)
        data.append("upload_preset","ufmbanner")
        data.append("cloud_name","deb9kfhnx")
      
       fetch("https://api.cloudinary.com/v1_1/deb9kfhnx/image/upload",{
          method: "post",
          body:data
        }).then(res=> res.json())
        .then(data=>{
          setUrl(data.url)
          console.log('papa');
          // const NewActeur= {
          //   nom: this.state.nom,
          //   description: this.state.description,
          //   province: this.state.province, 
          //   img: this.state.url,
          //   adresse:
          //     {
          //       itineraire: this.state.itineraire,
          //       longitude: this.state.longitude,
          //       latitude: this.state.latitude
          //     },
          //     contact:{
          //       numerosTelephone: this.state.telephone,
          //       numerosWhatsapp: this.state.whatsapp,
          //       email: this.state.email
          //     },
          //     type: this.state.type,
          // }
      
          
      
            // console.log(this.state.image);
            
            // console.log(NewActeur);
      
        //   API.post("acteurStructure/", NewActeur)
        //   .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        //     alert("Enregistrement reussi")
        //     toast.success("enregistrement effectuer avec succes", toast.POSITION.TOP_RIGHT)
        //     this.props.history.push('/admin/acteurStructure/ListerActeurStructure');
            
        //   }).catch((erreur)=> {
        //     console.log(erreur);
            
        //     this.setState({errorMessage: erreur.message});
        // });
      
          
        }).catch(error=> {
          console.log(error);
        }
        )
      }

      const handleSubmit = ()=>{
        uploadImage();
      }
      
      

    return(
        <>
        <Form onSubmit={handleSubmit}>
            <Input focus placeholder='titre de la photo' type="text" onChange={(e)=>setTitre(e.target.value)}/> <br/><br/>
            <Input focus placeholder='Search...' type="file"  onChange={(e)=>setImage(e.target.value)}/><br/> <br/>
            <Button>Envoyer</Button>
        </Form>

        </>
    )
} 

export default Formulaire;