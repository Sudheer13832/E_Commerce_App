package org.jsp.ecommerceapp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Address {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@Column(nullable=false)
	private int house_number;
	@Column(nullable=false)
	private String buliding_name,landmark,city,state,country;
	@Column(nullable=false)
	private int pincode;
	@ManyToOne
	private User user;
	

}
