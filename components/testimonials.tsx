import Image from "next/image";
import "@/app/styles/testimonials.css"

export default function Testimonials() {
    return (
        <div className="responsive-container-block big-container">
  <div className="responsive-container-block bg">
    <p className="text-blk title">
      Testimonials
    </p>
    <p className="text-blk desc">
    What do people who have tried Spookifier say about their experience with the site?
    </p>
    <div className="responsive-container-block blocks">
      <div className="responsive-cell-block wk-desk-1 wk-tab-1 wk-mobile-1 wk-ipadp-1 content">
        <p className="text-blk info-block">
            It is the most fun product I have ever used. Not having bought it when I had the chance is the thing I regret the most in this life</p>
        <div className="responsive-container-block person">
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 icon-block">
            <Image className="profile-img" width={50} height={50} alt="" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors1.svg" />
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 text-block">
            <p className="text-blk name">
              Moondar Pimatcha
            </p>
            <p className="text-blk desig">
              CEO of Boogle
            </p>
          </div>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-1 wk-tab-1 wk-mobile-1 wk-ipadp-1 content">
        <p className="text-blk info-block">
        My daughters and I have a lot of fun using this application. So much so that we showed my mother a picture of her Spookified and her blood pressure got so high that an ambulance had to come.
        <br />
        You can&apos;t believe how much we laughed as a family!
        </p>
        <div className="responsive-container-block person">
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 icon-block">
            <Image className="profile-img" width={50} height={50} alt="" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors1.svg" />
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 text-block">
            <p className="text-blk name">
              Zack Muckerberg
            </p>
            <p className="text-blk desig">
              CEO and co-founder of Anfeta
            </p>
          </div>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-1 wk-tab-1 wk-mobile-1 wk-ipadp-1 content bottom">
        <p className="text-blk info-block">
        After the trauma of my divorce, Spookifing images of my ex-wife was the only reason that kept me going.
        <br /><br />
        I can never thank Erlantz enough for creating this site.
        </p>
        <div className="responsive-container-block person">
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 icon-block">
            <Image className="profile-img" width={50} height={50} alt="" src="/testimonials/Bez-jeffos.jpg" />
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 text-block">
            <p className="text-blk name">
              Bez Jeffos
            </p>
            <p className="text-blk desig">
              CEO of Mercadon
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}