import Image from "next/image";
import "@/app/styles/testimonials.css"

export default function Testimonials() {
    return (
        <div className="responsive-container-block big-container">
  <div className="responsive-container-block bg">
    <p className="text-blk title font-[family-name:var(--font-creepster)]">
      Testimonials
    </p>
    <div className="responsive-container-block blocks">
      <div className="responsive-cell-block wk-desk-1 wk-tab-1 wk-mobile-1 wk-ipadp-1 content">
        <p className="text-blk info-block ">
            It is the most fun product I have ever used. Not having bought it when I had the chance is the thing I regret the most in this life.</p>
        <div className="responsive-container-block person">
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 icon-block">
            <Image className="profile-img" width={50} height={50} alt="" src="/testimonials/Moondar-pimatcha.jpg" />
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
            <Image className="profile-img" width={50} height={50} alt="" src="/testimonials/Zurk-muckerberg.jpg" />
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 text-block">
            <p className="text-blk name">
              Zack Muckerberg
            </p>
            <p className="text-blk desig">
              CEO of Anfeta
            </p>
          </div>
        </div>
      </div>
      <div className="responsive-cell-block  wk-desk-1 wk-tab-1 wk-mobile-1 wk-ipadp-1 content bottom">
        <p className="text-blk info-block">
        After the trauma of my divorce, Spookifing images of my ex-wife was the only reason that kept me going.
        <br /><br />
        I can never thank Erlantz enough for creating this site.
        </p>
        <div className="responsive-container-block person">
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 icon-block">
            <Image className="profile-img" width={50} height={50} alt="" src="/testimonials/Bez-Jeffos.jpg" />
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