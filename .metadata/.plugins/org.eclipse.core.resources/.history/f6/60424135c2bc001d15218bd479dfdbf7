package com.example.Board.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Board.entity.Board;

@Repository											// 엔티티, 기본 키
public interface BoardRepository extends JpaRepository<Board, Integer> {

	Page<Board> findByTitleContaining(String searchKeyword, Pageable pageable);
	
}
