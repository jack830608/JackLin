import React from 'react';
import './style.scss'

export default class Fion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zIndex: 2
        };
    }
    render() {
        const card1 = (
            <div
                className="cardHolder_fion"
                style={{ zIndex: this.state.zIndex === 1 ? 2 : 0 }}
                onClick={(e) => {
                    this.setState({ zIndex: 1 });
                    e.stopPropagation();
                }}
            >
                <div
                    className="card_fion"
                    style={{ background: this.state.zIndex === 1 ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)' }}
                >
                    <div className="circle_fion" />
                    <div className="title_fion"> Hello~ My Dear cat</div>
                    <div className="content_fion"> 哈囉～卡片終於來啦，之前就有跟你說不會是手作的卡片，因為我手很笨，做不出漂亮的東西，大概只有腦袋好使一點，所以希望你不要嫌棄它，這個卡片我也是很用心在做喔！</div>
                    <div className="content_fion">雖然你脾氣很差，常常生氣擺臭臉，雖然我們常常鬥嘴吵架，但我還是會繼續包容你繼續愛你。</div>
                    <div className="content_fion">你八月就要出國了，一方面很不想讓你出國，擔心你那麼脫線常常忘東忘西，沒有我你一定會丟三落四；一方面又希望你在國外可以找到你真正感興趣的事，真正想做的事</div>
                    <div className="content1_fion">你出國只需要照顧好自己，照顧好你的課業，完全不用擔心我喔！</div>
                    <div className="content2_fion">我保證，我會等你回來喔！</div>
                    <div className="content3_fion"> Jack Lin</div>
                </div>
            </div>
        )
        const card2 = (
            <div
                className="cardHolder1_fion"
                style={{ zIndex: this.state.zIndex === 2 ? 2 : 0 }}
                onClick={(e) => {
                    this.setState({ zIndex: 2 })
                    e.stopPropagation();
                }}
            >
                <div
                    className="card_fion"
                    style={{ background: this.state.zIndex === 2 ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)' }}
                >
                    <div className="circle_fion" />
                    <div className="title_fion"> Hi~ My Dear cat</div>
                    <div className="content_fion">終於還是到了這一天；跟你告白到在一起後這163天，真的完全不敢去想妳要出國這件事，更沒有勇氣到機場去送你，因為我知道一定沒那麼容易可以平復自己的情緒，從你上飛機後我一定是躲在房間裡不停的睡了又醒醒了又睡，想必我們都需要至少21天來習慣這件事。</div>
                    <div className="content_fion">這次妳自己一個人出國沒有捷克陪在你身邊幫你、照顧你，做任何事前要好好思考，不能再那麼脫線，應該更成熟更獨立更穩重了，在出國這兩年中我們都是彼此最強而有力的後盾，讓對方能更無後顧之憂的去做自己想做的事，兩年後我們都能成為更好的人。</div>
                    <div className="content_fion">要記得捷克說的話，絕對是現在比以前更愛你更想你，也可以跟妳百分之百保證沒有小三這號人物，你出國對我們勢必是很大的挑戰，妳也說我們要更努力經營感情花時間瞭解對方，我相信我們都能克服這一切的！</div>
                    <div className="content1_fion">總感覺心中還有很多話想說，想叮嚀妳，但你也知道我不擅表達，我相信你大概能猜到我想說些什麼</div>
                    <div className="content2_fion">不管你出國這段時間我們會發生什麼事，都請妳等我半年，我過年前一定過去，捷克也會在台灣等你</div>
                    <div className="content3_fion"> Jack Lin</div>
                </div>
            </div>
        )
        return (
            <div className="container_fion">
                <div className="box_fion">
                    <div style={{ position: 'absolute' }}>
                        {card1}
                    </div>
                    <div className="cardList_fion">
                        {card2}
                    </div>
                </div>
            </div>
        );
    }
}