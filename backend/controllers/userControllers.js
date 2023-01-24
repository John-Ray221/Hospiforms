const {db, auth} = require("../db/firebase");


const signup = async(req,res)=>{
        const {email,password, clinicName, practiseNum} = req.body

        let user = null;
        let generatedToken = null;
        
       
        await auth.createUser({
                email: email,
                password:password,
        }).then((userData)=>{
                user = userData

                auth.createCustomToken(user.uid).then((res)=> generatedToken = res);
        })
                
        await db.collection("users").doc(user.uid).set({
                email: email,
                clinicName: clinicName,
                practiseNum: practiseNum,
                forms: []
                                
        }).then(async()=>{
                const userRef = db.collection('users').doc(user.uid);
                const doc = await userRef.get();

                res.json({'userData': doc.data(),'authData': user,'token': generatedToken});
        })
      
                         
        
                
}

      
const login = async(req,res)=>{
        res.json({
                "msg": "User is logged in"         
})

}


module.exports = {
    signup,
    login
}