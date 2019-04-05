(function(){
    var sendQuestion = {
        inQuestion : function(){
            this.addEvents();
            console.log('this.cacheElements', this.cacheElements.btnSendQuest);
        },

        addEvents : function(){
            this.cacheElements.$btnSendQuestion.on('click', function(){
                this.sendInfo();
            }.bind(this))
        },
        
        cacheElements : {
            $btnSendQuestion : $('#btn-CuestionContact'),
            $inUserName : $('#in-UserContact'),
            $inQuestion : $('#in-Question')
        },

        sendInfo : function(){
            var inUn = this.cacheElements.$inUserName.val();
            var inQues = this.cacheElements.$inQuestion.val();

            var data = {
                inUn : inUn,
                inQues : inQues
            }

            console.log('data', data);

            $.ajax({
                data : data,
                type : 'post',
                url : '',
                success : function (result, status, xhr){

                }
            })
        }
    }
    sendQuestion.inQuestion();
})();