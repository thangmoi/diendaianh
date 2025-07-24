fetch('content.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('site-title').textContent = data.siteTitle;
    document.getElementById('section-title').textContent = data.sectionTitle;
    document.getElementById('section-content').textContent = data.sectionContent;
  })
  .catch(error => console.error('Lỗi khi tải nội dung:', error));