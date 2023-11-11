import { ConnectedUserEntity } from "src/chat/model/connected-user/connected-user.entity";
import { JoinedRoomEntity } from "src/chat/model/joined-room/joined-room.entity";
import { MessageEntity } from "src/chat/model/message/message.entity";
import { RoomEntity } from "src/chat/model/room/room.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Role from "./role.enum";

@Entity()
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  username: string;

  @Column({unique: true})
  email: string;

  @Column({unique: false, default:''})
  first_name: string;

  @Column({unique: false, default:''})
  second_name:string;

  @Column({unique: false, default:''})
  third_name:string;

  @Column({unique: false, default:''})
  birthday: string;

  @Column({unique: false, default:''})
  avatar_url:string;

  @Column({unique: false, default:''})
  sex:string;

  @Column({unique: false, default:0})
  kpi:number;

  @Column({select: false})
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
    array: true,
    default: [Role.Employee]
  })
  public roles: Role[]

  @ManyToMany(() => RoomEntity, room => room.users)
  rooms: RoomEntity[]

  @OneToMany(() => ConnectedUserEntity, connection => connection.user)
  connections: ConnectedUserEntity[];

  @OneToMany(() => JoinedRoomEntity, joinedRoom => joinedRoom.room)
  joinedRooms: JoinedRoomEntity[];

  @OneToMany(() => MessageEntity, message => message.user)
  messages: MessageEntity[];

  @BeforeInsert()
  @BeforeUpdate()
  emailToLowerCase() {
    this.email = this.email.toLowerCase();
    this.username = this.username.toLowerCase();
  }

}