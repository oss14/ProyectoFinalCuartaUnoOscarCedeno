(function(){
    var UserIn = {
        inUser : function(){
            this.addEvents();
            console.log('this.cacheElements', this.cacheElements.$btnIn);
        },

        addEvents : function(){
            this.cacheElements.$btnIn.on('click', function(){
                this.sendInfo();
            }.bind(this))
        },

        cacheElements:{
            $btnIn : $('#button-In'),
            $inUserName: $('#inputUserName'),
            $inPass: $('#inputUserPass')
        },

        sendInfo : function(){
            var inUserName = this.cacheElements.$inUserName.val();
            var inPassUser = this.cacheElements.$inPass.val();
        
            var data = {
                inUserName : inUserName,
                inPassUser : inPassUser
            }

            console.log('data', data);

            $.ajax({
                data : data,
                type : 'post',
                url : '',
                success: function(result,status, xhr){

                }
            })
        }
 
    }
    UserIn.inUser();
})();