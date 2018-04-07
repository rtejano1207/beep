import { Profile } from '../../models/profile/profile.interface';


const userList: Profile[] = [
    {firstName: 'Paul', lastName: 'Halliday', avatar: 'assets/imgs/avatar.png', email: 'paul.halliday@pisot.com', dateOfBirth:new Date() },
    {firstName: 'Raymond', lastName: 'Tejano', avatar: 'assets/imgs/avatar.png', email: 'raymond.tejano@gmail.com', dateOfBirth:new Date()},
    {firstName: 'Diomellah', lastName: 'Tejano', avatar: 'assets/imgs/avatar.png', email: 'diomellah.tejano@gmail.com', dateOfBirth:new Date()},
    {firstName: 'Danna Martine', lastName: 'Tejano', avatar: 'assets/imgs/avatar.png', email: 'danna.tejano@gmail.com', dateOfBirth:new Date()}
];

export const USER_LIST =  userList;
