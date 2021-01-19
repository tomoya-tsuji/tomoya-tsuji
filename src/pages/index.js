import React from "react"
import { Helmet } from "react-helmet"
// import { Iframely } from "../components/iframely"
import profileImage from "../images/profile.jpg"
import favicon from "../images/favicon.ico"
import appleTouchIcon from "../images/profile.jpg"

export default () =>(
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>TOMOYA TSUJI | Designer</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <meta name="description" content="Tomoya Tsuji | DigitalProductDesigner"></meta>
      <meta name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,700&amp;subset=latin-ext" rel="stylesheet"></link>
      <link rel="icon" href={favicon}></link>
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon}></link>
      <script type="text/javascript" src="https://cdn.iframe.ly/embed.js" charset="utf-8"/>
    </Helmet>

    <div className="profile_image">
      <img src={profileImage} alt="プロフィール画像"/>
    </div>
    <h1>TOMOYA TSUJI</h1>
    <p className="name">辻 朝也 / デザイナー</p>
    <p className="self_introduction">
      大学でプロダクトデザイン・未来予測デザインを学び、2016年にクックパッド株式会社にUI/UXデザイナーとして入社。入社後、サービスの核となるレシピ投稿関連の画面設計や開発を。その後機械学習を使った料理判定機能「 料理きろく 」の開発、有料会員向け機能を中心に検索体験の改善に取り組みました。 現在はたのしいキッチンbycookpadでデザインとフロントエンド開発をしています。 
    </p>

    <div className="career">
      <p><span className="years">1993</span> BORN IN KYOTO, JAPAN</p>
      <p><span className="years">2012</span> Hosei University</p>
      <p><span className="years">2013</span> amadana corp. </p>
      <p><span className="years">2013</span> SARAH inc. </p>
      <p><span className="years">2015</span> Takram </p>
      <p><span className="years">2016</span> GRADUATED FROM UNIV. </p>
      <p><span className="years">2016</span> Cookpad,inc</p>
    </div>

    <h2>Clients</h2>
    <ul className="partners">
      <li className="partners_list">株式会社YOUTRUST</li>
      <li className="partners_list">株式会社AppBrew</li>
      <li className="partners_list">株式会社Lang-8</li>
      <li className="partners_list">株式会社ロコガイド</li>
      <li className="partners_list">株式会社オスリー</li>
      <li className="partners_list">アソビュー株式会社</li>
      <li className="partners_list">シェアフル株式会社</li>
      <li className="partners_list">and more.</li>
    </ul>
  
    <h2>Works</h2>

    <div className="work_list">
      <h3>YOUTRUST(2020)</h3>
      <p className="works_description">
        副業・転職のキャリアSNS「YOUTRUST」のサービスデザインリニューアルを担当しました。
      </p>
      <div class="iframely-embed">
        <div class="iframely-responsive" style={{height: '140px'}}>
          <a href="https://youtrust.jp/" data-iframely-url="//cdn.iframe.ly/b0FBmZS?iframe=card-small">　</a>
          </div>
      </div>
    </div>

    {/* <div className="work_list">
      <h3>食べチョクiOSアプリ(2020)</h3>
      <p className="works_description">
        農直通販アプリ食べチョクのiOSアプリUIを一部担当しました。
      </p>
      
      <div class="iframely-embed">
        <div class="iframely-responsive" style={{height: '140px'}}>
          <a href="https://www.tabechoku.com/feature_articles/ios_app2007" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https://www.tabechoku.com/feature_articles/ios_app2007&key=e34335915f5dee38cdaf81343ac54ca8&iframe=card-small">　</a>
          </div>
      </div>
    </div> */}

    <div className="work_list">
      <h3>たのしいキッチン(2019-現在)</h3>
      <p className="works_description">
        サービスに関わるデザインすべてと、フロントエンド実装を担当しています。
      </p>
      <div class="iframely-embed">
        <div class="iframely-responsive" style={{height: '140px'}}>
          <a href="https://cookpad-kitchen.com/" data-iframely-url="//cdn.iframe.ly/7hrqcuU?iframe=card-small">　</a>
        </div>
      </div>
    </div>

    <div className="work_list">
      <h3>たべドリ(2018-2019)</h3>
      <p className="works_description">
        コンセプトの明確化からUIデザインまでプロトタイプを中心に担当しました。
      </p>
      <div class="iframely-embed">
        <div class="iframely-responsive" style={{height: '140px'}}>
          <a href="https://tabedori.jp/" data-iframely-url="//cdn.iframe.ly/oGbz4Yx?iframe=card-small">　</a>
        </div>
      </div>
    </div>

    <div className="work_list">
      <h3>クックパッド(2016-2018)</h3>
      <p className="works_description">
        iOS/Androidアプリを中心に、グラフィック、実装、UI、LP、分析など多岐にわたり携わりました。
      </p>
      <div class="iframely-embed">
        <div class="iframely-responsive" style={{height: '140px'}}>
          <a href="https://cookpad.com" data-iframely-url="//cdn.iframe.ly/vgjSSPA?iframe=card-small">　</a>
        </div>
      </div>
    </div>

    <div className="work_list">
      <h3>s-dev talks(2018 - 2020)</h3>
      <p className="works_description">
        s-dev talksのイベント運営担当しています。ロゴやバナー、ウェブサイトなどデザイン周りは１人で行っています。
      </p>
      <div class="iframely-embed">
        <div class="iframely-responsive" style={{height: '140px'}}>
          <a href="https://sdevtalks.org/" data-iframely-url="//cdn.iframe.ly/3xpsNJU?iframe=card-small">　</a>
        </div>
      </div>
    </div>

    <div className="work_list">
      <h3>シェアフル(2018)</h3>
      <p className="works_description">
        サービス立ち上げ時にUIやモーションロゴなどのデザインを行いました。
      </p>
      <div class="iframely-embed">
        <div class="iframely-responsive" style={{height: '140px'}}>
          <a href="https://sharefull.com/" data-iframely-url="//cdn.iframe.ly/ZvQ1rbp?iframe=card-small">　</a>
        </div>
      </div>
    </div>

    <div className="work_list">
      <h3>FoodDataBank by SARAH(2018)</h3>
      <p className="works_description">
        ロゴ・LPのデザインを担当しました。
      </p>
      <div class="iframely-embed">
        <div class="iframely-responsive" style={{height: '140px'}}>
          <a href="https://fooddatabank.net/" data-iframely-url="//cdn.iframe.ly/Juuh8NB?iframe=card-small">　</a>
        </div>
      </div>
    </div>

    <div className="work_list">
      <h3>HERP(2017)</h3>
      <p className="works_description">
        サービス立ち上げ時に、UIデザイナーとしてプロトタイプの作成や開発フローの整備などを行いました。
      </p>
      <div class="iframely-embed">
        <div class="iframely-responsive" style={{height: '140px'}}>
          <a href="https://herp.cloud/index.html" data-iframely-url="//cdn.iframe.ly/tN3roDr?iframe=card-small">　</a>
        </div>
      </div>
    </div>

    <div className="work_list">
      <h3>cookpad studio(2017)</h3>
      <p className="works_description">
        サービス立ち上げ時に、ロゴやLP、スタジオ内で使われるノベルティなどをデザインしました。
      </p>
      <div class="iframely-embed">
        <div class="iframely-responsive" style={{height: '140px'}}>
          <a href="https://info.cookpad.com/pr/news/press_2017_1129" data-iframely-url="//cdn.iframe.ly/5F4eMal?iframe=card-small">　</a>
        </div>
      </div>
    </div>

    <div className="work_list">
      <h3>mybest(2016)</h3>
      <p className="works_description">
        mybestの初期リリース時、ロゴやUI、フロントエンド開発を１人で担当しました。
        <ul>
          <li><a href="https://my-best.com">Service</a></li>
        </ul>
      </p>
      {/* <div class="iframely-embed">
        <div class="iframely-responsive" style={{height: '140px'}}>
          <a href="https://my-best.com" data-iframely-url="//cdn.iframe.ly/7hrqcuU?iframe=card-small">　</a>
        </div>
      </div> */}
    </div>

    <div className="work_list">
      <h3>その他</h3>
      <p className="works_description">
        プロダクトリリースには至らなかった新規サービス開発や、一部公開できないプロダクトもございます。
      </p>
    </div>

    <h2>Blog</h2>
    <div className="work_list">
      <h3>デザイナー同士で学びを共有し合う仕組みを作りました</h3>
      <p className="works_description">
        社内のデザイナー向けに学びと成長を目的とした仕組みを作りました。その背景や内容をまとめています。
      </p>
      <div class="iframely-embed">
        <div class="iframely-responsive" style={{height: '140px'}}>
          <a href="https://note.com/astrotom/n/nbf17a7499a32" data-iframely-url="//cdn.iframe.ly/PhSdMd9?iframe=card-small">　</a>
        </div>
      </div>
    </div>
    <div className="work_list">
      <h3>「キッチンが主役」のデザイン</h3>
      <p className="works_description">
        たのしいキッチンの世界観を作るため日々考えていることをまとめました。
      </p>
      <div class="iframely-embed">
        <div class="iframely-responsive" style={{height: '140px'}}>
          <a href="https://note.com/astrotom/n/n674777b04f39" data-iframely-url="//cdn.iframe.ly/z3veVS2?iframe=card-small">　</a>
        </div>
      </div>
    </div>

    <h2>Speaker</h2>
    <div className="work_list">
      <h3>Tigerspike UX Meetup #4 〜デザイナーの働きやすさとは〜(Apr.2018)</h3>
      <p className="works_description">
        Tigerspikeさんにお声がけをいただき、Tigerspike UX Meetupというイベンドにて登壇いたしました。
        <ul>
          <li><a href="https://speakerdeck.com/1020tomoya/dezainagadong-kiyasuikutukupatudofalsehuan-jing-toha">Slide</a></li>
        </ul>
      </p>
      <div class="iframely-embed">
        <div class="iframely-responsive" style={{height: '140px'}}>
          <a href="https://tigerspike.connpass.com/event/82821/" data-iframely-url="//cdn.iframe.ly/7k970RW?iframe=card-small">　</a>
        </div>
      </div>
    </div>

    <div className="work_list">
      <h3>Cookpad TechConf 2018(Feb.2018)</h3>
      <p className="works_description">
        クックパッド主催のテックカンファレンスにて登壇いたしました。
        <ul>
          <li><a href="https://speakerdeck.com/1020tomoya/cookpad-creative-workflow">Slide</a></li>
        </ul>
      </p>
      <div class="iframely-embed">
        <div class="iframely-responsive" style={{height: '140px'}}>
          <a href="https://techconf.cookpad.com/2018/" data-iframely-url="//cdn.iframe.ly/7NLqw2N?iframe=card-small">　</a>
        </div>
      </div>
    </div>

    <div className="work_list">
      <h3>「サービス開発勉強会 〜クックパッドも利用する”最速”でアイデアを形にする方法〜(Jun.2017)</h3>
      <p className="works_description">
        CAMPHOR-さんにお呼びいただき、ワークショップなどを絡めた勉強会を開催しました。
        <ul>
          <li><a href="https://blog.camph.net/event/service-development/">Link to Event Page</a></li>
        </ul>
      </p>
      <div class="iframely-embed">
        <div class="iframely-responsive" style={{height: '140px'}}>
          <a href="https://blog.camph.net/event/service-development/" data-iframely-url="//cdn.iframe.ly/4nooe1d?iframe=card-small">　</a>
        </div>
      </div>
    </div>

    <div className="work_list">
      <h3>IT業界でデザイナーとして働くってどんなこと？(Feb.2017)</h3>
      <p className="works_description">
        デザイナー志望の学生を対象に開催された、クックパッド・ヤフー・ミクシィの3社合同イベントにて登壇しました。
        <ul>
          <li><a href="https://linotice.tumblr.com/post/159708290264/20170418">Link to Event Page</a></li>
        </ul>
      </p>
    </div>


    <h2>Contact</h2>
    <p>お仕事のご相談・ご依頼等は以下よりご連絡ください</p>
    <a href="https://m.me/tomoya.tsuji.921">Facebook Messengerを開く</a>
      
  </div>
) 
