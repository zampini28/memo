import {
    Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn,
    JoinColumn, ManyToOne,
  } from "typeorm";
import { v4 as uuid } from "uuid";
import { Profile } from "./Profile";  
  @Entity("users")
  class User {
    @PrimaryColumn()
    readonly id!: string ;  
    @Column()
      name!: string;  
    @Column()
      email!: string;  
    @Column()
      admin!: boolean;
    @Column()
      password!: string;  
    @CreateDateColumn()
      created_at!: Date;  
    @UpdateDateColumn()
      updated_at!: Date;  
    @ManyToOne(() => Profile)
    @JoinColumn()
    profile: Profile
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }  
  export { User };