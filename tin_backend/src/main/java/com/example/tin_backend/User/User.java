package com.example.tin_backend.User;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name = "`user`")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class User
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String login;
    private String password;
    private String email;

    public User(String login,String password,String email)
    {
        this.login = login;
        this.password = password;
        this.email = email;
    }
}
