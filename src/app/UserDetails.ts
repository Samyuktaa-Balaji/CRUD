import {User} from './Users';

export class UserDetails {
    private uarray: User[] = [
        {
            id:1,
            firstName:"Samyuktaa",
            lastName:"Balaji"
        },
        {
            id:2,
            firstName:"Gayathri",
            lastName:"Rukmani"
        }
    ];

    constructor() { }

    getUser(): User[] {
        return this.uarray;
    }

    addUser(u:User) {
        u.id = this.uarray.length+1;
        this.uarray.push(u);
    }

    updateUser(u:User) {
        const id = this.uarray.findIndex(p=>p.id===u.id);
        this.uarray[id] = u;
    }

    deleteUser(u:User) {
        this.uarray.splice(this.uarray.indexOf(u),1);
    }
}