package com.example.Board.service;

import java.io.File;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.Board.entity.Board;
import com.example.Board.repository.BoardRepository;

import jakarta.servlet.ServletContext;

@Service
public class BoardService {

	@Autowired // new 안 해도 되게 해줌
	private BoardRepository boardRepository;
	
	// 글 작성 처리
	public void write(Board board, MultipartFile file) throws Exception {
								// 프로젝트 경로를 담아주게 됨 		+ 저장할 경로를 지정
		String projectPath = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\files";
		// UUID(식별자) = 랜덤으로 이름 만들기
		UUID uuid = UUID.randomUUID();
		//	저장될 파일이름 = 지정랜덤식별자_원래파일이름
		String fileName = uuid + "_" + file.getOriginalFilename();
		
        // 빈File껍데기를 생성 =  new File(파일경로, 파일이름)
		File saveFile = new File(projectPath, fileName);
		// 파일 저장
		file.transferTo(saveFile);
		
		// 디비에 파일 넣기
		board.setFilename(fileName);
		// 디비에 파일경로 넣기
		board.setFilepath("/files/" + fileName); // 저장된파일의이름,저장된파일의경로
		
		// 저장
		boardRepository.save(board);
	}
	
	// 게시글 리스트 처리
	public Page<Board> boardList(Pageable pageable) {
		return boardRepository. findAll(pageable);
	}
	public Page<Board> boardSearchList(String searchKeyword, Pageable pageable) {
		return boardRepository.findByTitleContaining(searchKeyword, pageable);
	}
	
	// 특정 게시글 불러오기
	public Board boardView(Integer id) {
		return boardRepository.findById(id).get();
	}
	
	// 특정 게시글 삭제
	public void boardDelete(Integer id) {
		
		//파일 경로 지정
		String path = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\files";
		Board b = boardRepository.findById(id).get();
		//현재 게시판에 존재하는 파일객체를 만듬
		File deleteFile = new File(path + "/" + b.getFilename());
						
		if(deleteFile.exists()) { // 파일이 존재하면
			deleteFile.delete(); // 파일 삭제	
		}	
		
		boardRepository.deleteById(id);
	}
	
	// 저장된 파일 지우기
	public void fileDelete(Integer id) {
		
		//파일 경로 지정
		String path = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\files";
		Board b = boardRepository.findById(id).get();
		//현재 게시판에 존재하는 파일객체를 만듬
		File deleteFile = new File(path + "/" + b.getFilename());
								
		if(deleteFile.exists()) { // 파일이 존재하면
			deleteFile.delete(); // 파일 삭제	
		}			
		
	}
}
