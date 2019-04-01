(function(){
    var UserData = {
        init : function(){
            this.addEvents();
            console.log('this.cacheElements', this.cacheElements.$btnSubmit);
        },

        addEvents : function(){
            this.cacheElements.$btnSubmit.on('click',function(){
                this.sendInfo();
            }.bind(this))
        },

        cacheElements:{
            $btnSubmit : $('#btn-submit'),
            $inpName : $('#inputName'),
            $inpLasName : $('#inputLasName'),
            $inpCell : $('#inputCell'),
            $inpLive : $('#inputLive'),
            $inpDir : $('#inputDir'),
            $inpNac : $('#inputNac'),
            $inpAge : $('#inputAge'),
            $inpCom : $('#inputCom'),
            $inpPass : $('#inputPass'),
            $inpMail : $('#inputMail')
        },

        sendInfo : function(){
            var inName = this.cacheElements.$inpName.val();
            var inLasName = this.cacheElements.$inpLasName.val();
            var inCell = this.cacheElements.$inpCell.val();
            var inLive = this.cacheElements.$inpLive.val();
            var inDir = this.cacheElements.$inpDir.val();
            var inNac = this.cacheElements.$inpNac.val();
            var inAge = this.cacheElements.$inpAge.val();
            var inCom = this.cacheElements.$inpCom.val();
            var inPass = this.cacheElements.$inpPass.val();
            var inMail = this.cacheElements.$inpMail.val();

            var data = {
                inName : inName,
                inLasName : inLasName,
                inCell : inCell,
                inLive : inLive,
                inDir : inDir,
                inNac : inNac,
                inAge : inAge,
                inCom : inCom,
                inPass : inPass,
                inMail : inMail
            }

            console.log('data',data);

            $.ajax({
                data : data,
                type: 'post',
                url: '',
                success: function (result, status, xhr){
    
                }
            })
        }
    }
    UserData.init();
})();

//FUNCION MAIL COMPROBACION
(function(){
    $("#inputMail").on('blur', function(){
        console.log('PRUEBA DEL FOCUS MAIL...');
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(!re.test($("#inputMail").val())){
            $('.error-mail').html('Esta ingresando un correo invalido...')
        }
    });
})();

//FUNCION DE COMPROBACION DE PASSWORD
(function(){
    $("#inputPass").on('blur', function(){
        console.log('PRUEBA DEL FOCUS PASS...');

        if(($("#inputPass").val().length)<5){
            $('.error-pass').html('Se encuentra ingresando una contraseña de '+($("#inputPass").val().length) + '. Esta tiene que ser de almenos 5 caracteres.')
        }
    });
})();

//FUNCION TELEFONO COMPROBACION
(function(){
    $("#inputCell").on('blur',function(){
        console.log('PRUEBA FOCUS NUMEROS');
        let renom = /^[0-9]+$/;

        if(!renom.test($("#inputCell").val())){
            $('.error-telefono').html('El número digitado no es de un formato correcto...')
        }
    });
})();

//FUNCION EDAD COMPROBACION
(function(){
    $("#inputAge").on('blur',function(){
        console.log('PRUEBA FOCUS NUMEROS');
        let renom = /^[0-9]+$/;

        if(!renom.test($("#inputAge").val())){
            $('.error-edad').html('El número digitado no es de un formato correcto...')
        }
    });
})();


//FUNCION DE COMPROBACION DE NOMBRE
(function(){
    $("#inputName").on('blur',function(){
        console.log('PRUEBA FOCUS NOMBRE');
        let renom = /^[a-zA-Z]|[[:blank:]]$/;

        if(!renom.test($("#inputName").val())){
            $('.error-nombre').html('El nombre que ingreso se encuentra en un formato incorrecto...')
        }
    });
})();

//FUNCION DE COMPROBACION DE APELLIDO
(function(){
    $("#inputLasName").on('blur',function(){
        console.log('PRUEBA FOCUS APELLIDO');
        let renom = /^[a-zA-Z]|[[:blank:]]$/;

        if(!renom.test($("#inputLasName").val())){
            $('.error-apellido').html('El apellido que ingreso se encuentra en un formato incorrecto...')
        }
    });
})();

//FUNCION DE COMPROBACION DE RESIDENCIA
(function(){
    $("#inputLive").on('blur',function(){
        console.log('PRUEBA FOCUS RESIDENCIA');
        let renom = /^[a-zA-Z]|[[:blank:]]$/;

        if(!renom.test($("#inputLive").val())){
            $('.error-live').html('La residencia que ingreso se encuentra en un formato incorrecto...')
        }
    });
})();

//FUNCION DE COMPROBACION DE DIRECCION
(function(){
    $("#inputDir").on('blur',function(){
        console.log('PRUEBA FOCUS DIRECCION');
        let renom = /^[a-zA-Z]|[[:blank:]]$/;

        if(!renom.test($("#inputDir").val())){
            $('.error-direccion').html('La dirección que ingreso se encuentra en un formato incorrecto...')
        }
    });
})();

//FUNCION DE COMPROBACION DE NACIONALIDAD
(function(){
    $("#inputNac").on('blur',function(){
        console.log('PRUEBA FOCUS NACIONALIDAD');
        let renom = /^[a-zA-Z]|[[:blank:]]$/;

        if(!renom.test($("#inputNac").val())){
            $('.error-nacionalidad').html('La nacionalidad que ingreso se encuentra en un formato incorrecto...')
        }
    });
})();

//FUNCION DE COMPROBACION DE COMPAÑIA
(function(){
    $("#inputCom").on('blur',function(){
        console.log('PRUEBA FOCUS COMPAÑIA');
        let renom = /^[a-zA-Z]|[[:blank:]]$/;

        if(!renom.test($("#inputCom").val())){
            $('.error-compañia').html('El nombre de la compañía que ingreso se encuentra en un formato incorrecto...')
        }
    });
})();