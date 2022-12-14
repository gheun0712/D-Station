package com.ssafy.db.repository;

import com.ssafy.db.entity.Planet;
import com.ssafy.db.entity.Progress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * 행성 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface ProgressRepository extends JpaRepository<Progress, Long> {

}
