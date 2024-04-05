package com.gymgenixs.dto;

import com.google.gson.JsonObject;
import lombok.Data;

@Data
public class ClientDto {
    int errorCode;
    String errorMessege;
    JsonObject data;

}
