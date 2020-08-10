export const CURRENT_USER = 'CURRENT_USER'

export const currentuser = (user) => {
    return (dispatch) => {
        user = {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            photo: user.photo,
            method: user.method,
            confirmed: user.confirmed,
            membertype: user.member

        }
        return dispatch({type:CURRENT_USER,payload:user})
        //return {dispatch({type: CURRENT_USER, payload: user})}
    }
}

// class CreateAccount < ActiveRecord::Migration[5.0]
//     def change
//         create_table :accounts do |a|
//             a.string :name
//             a.string :email
//             a.string :photo
//             a.string :phone
//             a.string :password_digest
//             a.string :recovery
//             a.string :method
//             a.boolean :confirmed, default: false
//             a.string :member_type
//             a.string :created_at
//         end
//     end
// end