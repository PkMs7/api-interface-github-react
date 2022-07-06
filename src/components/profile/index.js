import React from "react";
import * as S from './styled'

function Profile() {
    return <S.Wrapper>
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/100943409?v=4" alt="avatar do usuário"/>
        <div>
        <S.WrapperInfoUser>
          <h1>Patrick Marques</h1>
          <S.WrapperUsername>
            <h3>Username: </h3>
            <a href="https://github.com/PkMs7" target="_blank" rel="noreferrer">PkMs7</a>
          </S.WrapperUsername>
          <S.WrapperStatusCount>
                <div>
                    <h4>Followers</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Starreds</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Followings</h4>
                    <span>5</span>
                </div>
          </S.WrapperStatusCount>
        </S.WrapperInfoUser>
          </div>
    </S.Wrapper>;
};

export default Profile;