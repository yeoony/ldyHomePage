// 예시로 가상의 사용자 아이디 배열을 만들어 사용합니다.
const onlineUsers = ['이도연', '임경남🥰', '둥이', '둥이엄마', '둥이아빠'];

// 페이지가 로드되면 실행되는 함수
document.addEventListener('DOMContentLoaded', () => {
  const onlineUsersList = document.getElementById('online-users');

  // 가상의 사용자 아이디 배열을 기반으로 동적으로 목록을 생성합니다.
  onlineUsers.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = user;
    onlineUsersList.appendChild(listItem);
  });
});

// 이미지 슬라이드를 위한 코드
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slideshow img');
    let currentSlideIndex = 0;
  
    // 이미지 슬라이드 함수
    function showNextSlide() {
      slides.forEach(slide => {
        slide.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
        slide.classList.remove('active');
      });
      slides[currentSlideIndex].classList.add('active');
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    }
  
    // 1초마다 이미지 슬라이드를 변경
    setInterval(showNextSlide, 3000);
  });

  // 게시글을 추가하는 기능
document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit-btn');
    const postContainer = document.getElementById('post-container');
  
    submitBtn.addEventListener('click', () => {
      const postTitle = document.getElementById('post-title').value;
      const postContent = document.getElementById('post-content').value;
  
      if (postTitle.trim() === '' || postContent.trim() === '') {
        alert('제목과 내용을 모두 입력해주세요.');
        return;
      }
  
      const postElement = createPostElement(postTitle, postContent);
      postContainer.appendChild(postElement);
  
      // 입력 폼 비우기
      document.getElementById('post-title').value = '';
      document.getElementById('post-content').value = '';
    });
  
    function createPostElement(title, content) {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = title;
  
      const contentElement = document.createElement('p');
      contentElement.textContent = content;
  
      postElement.appendChild(titleElement);
      postElement.appendChild(contentElement);
  
      return postElement;
    }
  });