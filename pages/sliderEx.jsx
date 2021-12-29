import React from "react";
import Slider from "react-slick";

const SliderExPage = () => {
  return (
    <div className="ctm_viewer">
      <div className="ctm_dim">
        <div className="dim_alert_box">
          <div className="LS_spinner2">
            <div className="loading" />
          </div>
          <div className="text">
            파일 다운로드 중입니다.
            <br />
            잠시만 기다려주세요.
          </div>
        </div>
      </div>
      <div className="header">
        <h1 className="ellipsis">김더존 주민등록 등본.pdf</h1>
        <button type="button" className="btn_close">
          <span className="blind">닫기</span>
        </button>
      </div>
      <div className="container">
        <div className="content">
          <div className="view_wrap">
            <Slider
              className="view_list"
              dot={false}
              infinite={false}
              arrows={false}
              slidesToShow={1}
              slidesToScroll={1}
            >
              <div className="item">
                <img
                  src="https://via.placeholder.com/350x500/0000ff/808080?text=1"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src="https://via.placeholder.com/350x500/0000ff/808080?text=1"
                  alt=""
                />
              </div>
            </Slider>
            <span className="viwe_page_num">
              <em>3/</em>8
            </span>
          </div>

          {/* view option wrap */}
          <div className="view_btn_wrap">
            <button type="button" className="view_btn back">
              <span className="blind">뒤로가기</span>
            </button>
            <button type="button" className="view_btn down">
              <span className="blind">다운로드</span>
            </button>
            <button type="button" className="view_btn info">
              <span className="blind">상세보기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderExPage;
