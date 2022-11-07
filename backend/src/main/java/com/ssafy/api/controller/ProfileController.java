package com.ssafy.api.controller;

import com.ssafy.api.response.profile.ProfileDto;
import com.ssafy.api.service.ProfileService;
import com.ssafy.api.service.UserService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.User;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@Api(value = "유저 프로필 정보 API", tags = {"profile"})
@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    @Autowired
    ProfileService profileService;

    @Autowired
    UserService userService;

    @GetMapping("/")
    @ApiOperation(value = "유저의 프로필 정보를 조회한다.", notes = "유저 id를 기반으로 유저의 프로필정보를 가져온다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공")
    })
    public ResponseEntity<?> getUserProfile(
            @RequestParam @ApiParam(name = "유저 id") String userId
    ){
        Optional<User> user = userService.getUserById(userId);
        if ( user.isPresent() ) {
            return ResponseEntity.status(200).body(profileService.getProfileImage(user.get()));
        }
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "존재하지 않는 유저입니다."));
    }
}
