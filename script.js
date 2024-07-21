
const btn_share = document.querySelector('.btn-share');
const div_user_info = document.querySelector('.user-info');
const user_card = document.querySelector('.user-card');
const btn_container = document.querySelector('.btn-container');
const popup = document.querySelector('.share-popup');

const facebook_img = document.createElement('img');
const twitter_img = document.createElement('img');
const pinterest_img = document.createElement('img');

const facebook_btn = document.createElement('button');
const twitter_btn = document.createElement('button');
const pinterest_btn = document.createElement('button');

facebook_img.setAttribute('src', 'images/icon-facebook.svg');
twitter_img.setAttribute('src', 'images/icon-twitter.svg');
pinterest_img.setAttribute('src', 'images/icon-pinterest.svg');

facebook_btn.appendChild(facebook_img);
twitter_btn.appendChild(twitter_img);
pinterest_btn.appendChild(pinterest_img);

facebook_btn.setAttribute('class', 'btn-social');
twitter_btn.setAttribute('class', 'btn-social');
pinterest_btn.setAttribute('class', 'btn-social');

let is_origin_content = true;

function toogleSocialMediaButtons() {
    const is_facebook_btn_present = btn_container.contains(facebook_btn);
    const is_twitter_btn_present = btn_container.contains(twitter_btn);
    const is_pinterest_btn_present = btn_container.contains(pinterest_btn);
    
    if (is_facebook_btn_present && is_pinterest_btn_present && is_twitter_btn_present) {
        btn_container.removeChild(facebook_btn);
        btn_container.removeChild(twitter_btn);
        btn_container.removeChild(pinterest_btn);
    } else {
        btn_container.appendChild(facebook_btn);
        btn_container.appendChild(twitter_btn);
        btn_container.appendChild(pinterest_btn);
    }
    
}

if (window.innerWidth < 1400) {
 btn_share.addEventListener('click', (e) => {
    if (!is_origin_content && window.innerWidth < 1400) {
        div_user_info.innerHTML = ' <img src="images/avatar-michelle.jpg" id="user-img">\n' +
            '            <div class="user-text">\n' +
            '              <p><strong>Michelle Appleton</strong></p>\n' +
            '              <p>28 Jun 2020</p>\n' +
            '            </div>\n' +
            '           </div>';
        user_card.style.backgroundColor = 'white';
        is_origin_content = true;
    } else {
        div_user_info.innerHTML = `
        <div class="user-text">
            <p><strong>SHARE</strong></p>
        </div>`;
        user_card.style.backgroundColor = 'gray';
        div_user_info.style.fontSize = '30px';
        is_origin_content = false;
    }
    toogleSocialMediaButtons();

})
   
} else {
 document.querySelector('.btn-share').addEventListener('click', (e) => {
    if (window.innerWidth >= 1400) {
        popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
    }
})   
}

