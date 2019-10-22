
Ext.onReady(function(){
    
		var autentificacion = new Ext.FormPanel(
                        {
			//labelWidth: 100,
			url: 'logincontroller',//'controlador/autentificacion.php',
			frame: false, //El panel se queda sin borde
			bodyStyle: "padding: 20px; background-color: white;", //Le damos el color blanco al panel y ubicamos los items en el centro
			monitorValid:true,
			keyMap: null,
			//defaults :{ listeners : { specialkey : submitOnEnter }  },

			items:[{
				  xtype: 'textfield', //Creo la etiqueta usuario y el campo de texto
                                  anchor: '95%',  
				  fieldLabel: 'USUARIO',
				  name: 'usuario',
				  inputType: 'text',
				  regex:/^[. a-zA-Z .]+$/,
			      regexText:'MORGAN DICE:Debe escribir solo letras y puntos',
				  allowBlank:false
				  },
				  
				  {
				  xtype: 'textfield',  //Creo la etiqueta Contraseña y el campo de texto password
				  anchor: '95%',
                                  fieldLabel:'CONTRASE&Ntilde;A', 
				  name:'contrasena',
				  inputType: 'password',
				  /*regex:/^[. a-zA-Z .]+$/,
			      regexText:'MORGAN DICE:Debe escribir solo letras y puntos',*/
				  allowBlank:false
				 
				  
				  
				  },

				  {
				  region: 'center',  //Creo la region para colocar la imagen
				  xtype: 'image',
				  src: 'App/img/imagen_login.png',
				  width: 35,
				  heigth: 35
			}],
			 
			  			

			
            buttons:[{ 
                text:'Entrar',
                formBind: true,	 
                //  FunciÃ³n  que se activa cuando el usuario hace clic en el botÃ³n 
                handler:function(){ 
                    autentificacion.getForm().submit({ 
                        waitTitle:'INGRESANDO A LA COMUNIDAD', 
                        waitMsg:'Enviando sus datos:',
                        failure: function(form,action)  //En caso  de exito
                        {
                            
                          
			Ext.MessageBox.show({  //Muestro un mensaje generado desde php y extjs
                     			title: 'Error en los datos', 
                      		    msg: action.response.responseText,
                      			buttons: Ext.Msg.OK,
                       			icon: Ext.MessageBox.SUCCES
                    			});
                            window.location="main.jsp";
                        }
                        
                       
                    
                    }); 
             
					} 
			}]
 
		}
                        
            );
    var win = new Ext.Window({
        layout:'fit',
        width:320,
        height:210,
        closable: false, //en caso de 'true' se genera un boton de cerrar
        resizable: false,
		minimizable: false, //En caso de 'true' se genera un boton para minimizar la ventana
		maximizable: false, //en caso de 'true' se genera un boton  para maximizar la ventana
		//animCollapse: true, //Realiza la animacion al minimizar la ventana
		collapsible: true,
		collapsed:true,
		modal:true,//Habilita la ventana modal
        //plain: true,
        border: true, //Genera un borde dentro la ventana
        title: '<CENTER><h3>Login de Usuarios</h3></center>', //El titulo que tendra la ventana
        items:[autentificacion]
     
	   
	});
	win.show();

       

})

