import { useFormik }  from 'formik'


const initialValues = {
            name : '',
            email:''
        }
   const onSubmit=values=>{
                    console.log('Submitted Form Values',values)
                } 
    const validate=values=>{
                let errors={}
    
                if(!values.name){
                    errors.name = 'Namerequired'
                }
    
                if(!values.email){
                    errors.email="EmailRequird"
                }
              return errors  
            }                  

function Youforms(){

 //This one way to config useFqormik method   
    // const formik = useFormik({
    //     initialValues : {
    //         name : '',
    //         email:''
    //     },
    //     onSubmit:values=>{
    //         console.log('Submitted Form Values',values)
    //     },
    //     validate:values=>{
    //         let errors={}

    //         if(!values.name){
    //             errors.name = 'Name required'
    //         }

    //         if(!values.email){
    //             errors.email="Email Requird"
    //         }
            
    //     }
    // });

  //Another Way to simplify the object of useConfig method

   let formik = useFormik({
     initialValues,
     onSubmit,
     validate
   })
 


     //console.log('FromValues',formik.values)
    console.log(formik.errors)
    return(
        <>
          <form onSubmit={formik.handleSubmit}>
             <label htmlFor="name">Name</label>
             <input type="text" 
             id = "name" name="name" 
             onChange={formik.handleChange} 
             onBlur={formik.handleBlur}
             value={formik.values.name}/>
             {formik.touched.name && formik.errors.name? <div>{formik.errors.name}</div>:null}
             <label htmlFor="email">Email</label>
             <input type="text" id = "email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
             {formik.touched.email && formik.errors.email?<div>{formik.errors.email}</div>:null}
             <button type="submit">Submit</button>
          </form>
        </>
    )
}

export default Youforms;