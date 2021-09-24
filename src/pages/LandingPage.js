// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
// components
import Page from "../components/Page";
import {
  LandingHero,
  SMImageSection,
  MDImageSection,
  MDImageVideoSection,
  LGText,
  TextSection,
  LandingContact,
  LandingPrivacyPolicy,
} from "../components/_external-pages/landing";

const RootStyle = styled(Page)({
  height: "100%",
});

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

export default function LandingPage() {
  return (
    <RootStyle title="This is Demo website | Minimal-UI" id="move_top">
      <LandingHero>
        <video
          muted={false}
          loop={true}
          playsInline=""
          autoPlay={true}
          preload="auto"
          data-src="https://373437-1168568-raikfcquaxqncofqfm.stackpathdns.com/files/landing-hero-001.mp4#t=0"
          data-lazyload=""
          data-behavior="softVideo"
          data-pagetransition-wait-load-desktop=""
          src="https://373437-1168568-raikfcquaxqncofqfm.stackpathdns.com/files/landing-hero-001.mp4#t=0"
        ></video>
      </LandingHero>

      <ContentStyle>
        <TextSection
          text="Exhibition"
          text1="Operating at the intersection of technology and biology, architect and designer Neri Oxman is calling for a fundamental shift in the way we design and construct the built environment, from consuming Nature to augmenting her."
          text2="With Material Ecology, Oxman has pioneered a field that promotes previously impossible opportunities for design; informing how buildings and products are made and how their shape and material composition may perform in harmony with the ecosystems they inhabit."
        />
        <LGText text="Material Ecology is a design philosophy, research area, and scientific approach that explores, informs, and expresses interrelationships between the built, the grown, and the augmented." />
      </ContentStyle>

      <LandingHero>
        <video
          muted={false}
          loop={true}
          playsInline=""
          autoPlay={true}
          preload="none"
          data-src="https://373437-1168568-raikfcquaxqncofqfm.stackpathdns.com/files/silkii_web_option1_1080p.m4v"
          data-lazyload=""
          data-behavior="softVideo"
          src="https://373437-1168568-raikfcquaxqncofqfm.stackpathdns.com/files/silkii_web_option1_1080p.m4v"
        ></video>
      </LandingHero>

      <ContentStyle>
        <TextSection
          text="Projects"
          text1="The innovations developed by Oxman and her team have enabled a new age of ‘biological alchemy’ whereby micro-organisms can be designed to mimic ‘factories’ and materials strategically augmented at their basic biological properties. These technologies offer a radical new approach to design and production in which almost any biomass can be transformed into biomaterials to be used for a variety of purposes, from the production of wearable garments to the construction of buildings. For example, E coli, a bacterium that lives in the gut, can be transformed into edible sugar; grass converted into diesel; and corn transfigured into plastic."
          text2="Oxman and her team draw on multiple scientific fields to invent groundbreaking manufacturing practices that grow rather than assemble. Given this newly found ability to design living matter as the built environment, rather than for it, Oxman advocates for advancing a new kind of ecology in which the assembly line for environmentally agnostic single-use part is replaced by environmentally informed multi-functional materials, products and buildings: a Material Ecology.
          The projects below are presented in narrative form. Each project includes sections dedicated to context and motivation (“Position”,) a detailed description of the physical intervention (“Product,”) an account of the enabling technology invented to produce it (“Process,”) and a set of design principles or environmental actions proposed (“Policy”)."
        />
        <LGText text="Material Ecology is a design philosophy, research area, and scientific approach that explores, informs, and expresses interrelationships between the built, the grown, and the augmented." />
      </ContentStyle>

      <LandingHero>
        <video
          muted={false}
          loop={true}
          playsInline=""
          autoPlay={true}
          preload="none"
          data-src="https://373437-1168568-raikfcquaxqncofqfm.stackpathdns.com/files/totems_web_1080p_01gray4.mp4"
          data-lazyload=""
          data-behavior="softVideo"
          src="https://373437-1168568-raikfcquaxqncofqfm.stackpathdns.com/files/totems_web_1080p_01gray4.mp4"
        ></video>
      </LandingHero>

      <SMImageSection
        url1="https://oxman.imgix.net/cfd18508-bace-453e-b91e-1037a863569b/monocoque-00001-listing.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C310%2C3311%2C2066"
        url2="https://oxman.imgix.net/fe831e84-ce8f-4dbd-a89f-12a1e8b706c0/raycounting-00001-listing.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C537%2C2436%2C1523"
        url3="https://oxman.imgix.net/13718549-4c4c-441c-af82-39271763de42/cartesianwax-01.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C108%2C2355%2C1469"
      />

      <SMImageSection
        url1="https://oxman.imgix.net/3a9dd72e-477f-4b94-b4bd-fee9f3061915/vespersi-web-1as1.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C94%2C4499%2C2812"
        url2="https://oxman.imgix.net/9b6799e3-5de3-4c99-8ff3-3b5f1e6bd92b/vespersi-web-2as2.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C94%2C4499%2C2812"
        url3="https://oxman.imgix.net/19bc859a-2f7c-44c0-87da-40f5e8633b89/vespersi-web-3as3.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C94%2C4499%2C2812"
      />

      <ContentStyle>
        <LGText text="From climate change to space exploration, the field of Material Ecology presents new opportunities for design and construction that are inspired, informed, and engineered by, for and with Nature." />
        <TextSection
          text1="Consider a building façade without components—a continuous construction modeled after human skin—with regions that serve as structure, window, and environmental filters. To achieve this, Oxman and her team invented a robotic platform for 3D-printing biopolymers where shape and composition are directly informed by physical properties (such as stiffness and opacity), environmental conditions (such as load, temperature, and relative humidity), and fabrication constraints (such as arm speed and nozzle pressure)."
          text2="Consider, as well, the design of a ‘body façade’—a wearable microbiome in the form of a corset, or a mask—that can prevent toxins from entering the human body, while enabling filtration and absorption of useful vitamins. In order to achieve such single-material multifunctional structures, Oxman and her team developed a framework that fosters data-driven approaches to material modeling enabling integration between shape formation and material composition."
        />
      </ContentStyle>

      <LandingHero>
        <img
          data-src="https://oxman.imgix.net/3ace6dc4-e2d3-41d1-8d2d-1cabaa122953/aguahoja-00001-hero.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C132%2C6312%2C3945"
          alt="Aguahoja"
          src="https://oxman.imgix.net/3ace6dc4-e2d3-41d1-8d2d-1cabaa122953/aguahoja-00001-hero.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C132%2C6312%2C3945"
        />
      </LandingHero>

      <MDImageSection
        url1="https://oxman.imgix.net/silk-pavilion-00027.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C108%2C5184%2C3240"
        url2="https://oxman.imgix.net/bb4f5f2a-7362-493f-abca-48208ebf4d76/lazarus-child-holding-mask-01-extend.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=145%2C529%2C2653%2C1657"
      />

      <MDImageVideoSection
        url1="https://oxman.imgix.net/9b76d8fb-abda-4cef-9cf6-5cfc4a60544b/glassi-web-01.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C88%2C4211%2C2636"
        url2="https://373437-1168568-raikfcquaxqncofqfm.stackpathdns.com/files/glass-00002-listing.mp4"
      />

      <ContentStyle>
        <LGText text="Our projects necessitate that we invent the technologies to create them." />

        <TextSection
          text="Platforms"
          text1="The ideas and principles behind Material Ecology inspired the need for innovation in computational form-generation and digital fabrication. Each project included in the exhibition is coupled with a platform: an enabling technology invented at our Lab to facilitate the design, fabrication and production of each of our works.
      In the biological world structures are optimized for a multiplicity of functions across scales: structural load, environmental pressures, spatial constraints, and so on. But in the designed world it is still impossible to match the sophistication of the natural world, which is far more refined than the human-made practices involved in making/producing polymers, concrete, steel and glass."
          text2="But what if we could change that, by creating new technologies that can vary the physical properties of matter at a level that approaches the complexity of the natural world? If bricks were ‘smart’, buildings would likely weigh less, generate less carbon, and function more like a body. Material Ecology is an approach to design that offers a set of principles and technologies enabling exactly that: using our approach, designers can create relationships between human-made structures and their environments at the resolution that matches nature."
        />

        <LGText text="Imagine the possibility of being able to create a digitally-printed, biologically-augmented beating heart that will perfectly match its host, for those in need of a transplant. There is then new potential to save millions of lives." />
      </ContentStyle>

      <LandingHero>
        <img
          data-src="https://oxman.imgix.net/4d420aa8-5474-4b49-bee1-020ba45049e4/cofab-bee-ct-original-gray.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C4829%2C3021"
          alt="Cofab Bee Ct Original Gray"
          src="https://oxman.imgix.net/4d420aa8-5474-4b49-bee1-020ba45049e4/cofab-bee-ct-original-gray.jpg?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80&amp;rect=0%2C0%2C4829%2C3021"
        />
      </LandingHero>

      <SMImageSection
        url1="https://oxman.imgix.net/3a50e4d6-15bc-41c6-b8fa-f4934d7f72c7/hlm-petri-experiments-gray.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=20%2C483%2C2547%2C1591"
        videoUrl2="https://373437-1168568-raikfcquaxqncofqfm.stackpathdns.com/files/ddmm_web_720p_v4.m4v"
        videoUrl3="https://373437-1168568-raikfcquaxqncofqfm.stackpathdns.com/files/g3dp_web_720p_v2.m4v"
      />

      <LandingHero>
        <img
          data-src="https://oxman.imgix.net/4764b2dc-7177-4bb3-bd18-c714954ac69e/aguahoja-multilayered-cellulose-structure-color.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C120%2C5760%2C3600"
          alt="Cofab Bee Ct Original Gray"
          src="https://oxman.imgix.net/4764b2dc-7177-4bb3-bd18-c714954ac69e/aguahoja-multilayered-cellulose-structure-color.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C120%2C5760%2C3600"
        />
      </LandingHero>

      <ContentStyle>
        <LGText text="An architect, scientist, engineer and inventor, Neri Oxman has led the creation of scientific research and technologies with an emphasis on integrative design across scales and disciplines." />

        <TextSection
          text="About Neri Oxman"
          text1="A multi-disciplinary designer, Oxman founded The Mediated Matter Group at the Massachusetts Institute of Technology in 2010 where she established and pioneered the field of Material Ecology, fusing technology and biology to deliver designs that align with principles of ecological sustainability. Oxman became a tenured professor at MIT in 2017.  
        Oxman received her PhD in Design Computation at MIT in 2010. Prior to that, she earned a diploma from the Architectural Association in London, complementing studies at the Faculty of Architecture and Town Planning at the Technion Israel Institute of Technology, and training at the Department of Medical Sciences at the Hebrew University, Jerusalem. Oxman was an architect and research consultant at Kohn Pedersen Fox Associates in London from 2004-05, during which she also served as Visiting Associate and Evaluator for SmartGeometry Group."
          text2="In addition to over 150 scientific publications and inventions, Oxman’s work is included in the permanent collections of leading international museums including MoMA, San Francisco Museum of Modern Art, Centre Pompidou, MAK Museum of Applied Arts, FRAC Collection for Art and Architecture, and the Cooper Hewitt Smithsonian Design Museum. Her work has been recognized at the World Economic Forum, where she was named a Cultural Leader in 2016 and is a member of the Expert Network. In 2018, Oxman was honored with the Cooper Hewitt National Design Award and the London Design Innovation Medal. In 2019, Oxman received an Honorary Fellowship by the Royal Institute of British Architects and the Contemporary Vision Award by SFMOMA."
        />
      </ContentStyle>

      <SMImageSection
        url1="https://oxman.imgix.net/0f8a244b-b6c5-41f0-ad0b-0bc9ad5a4eca/neri-oxman-moma-store-00001.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C172%2C8256%2C5160"
        url2="https://oxman.imgix.net/0f8a244b-b6c5-41f0-ad0b-0bc9ad5a4eca/neri-oxman-moma-store-00005.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C85%2C4096%2C2560"
        url3="https://oxman.imgix.net/0f8a244b-b6c5-41f0-ad0b-0bc9ad5a4eca/neri-oxman-moma-store-00003.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C85%2C4096%2C2560"
      />

      <ContentStyle>
        <TextSection
          text="Opportunities"
          text1="We are currently seeking architects, designers, computer scientists, roboticists, biologists to join our team. Please respond by emailing a one page statement of interest and a link to your portfolio and/or published work."
          text2="Please visit oxman.com/future to see open positions. Please contact us at future@oxman.com to learn about other opportunities."
        />
      </ContentStyle>

      <ContentStyle>
        <LandingContact />
      </ContentStyle>

      <LandingHero>
        <video
          class="a-media__video s-fade-in"
          muted={false}
          loop={true}
          playsInline=""
          autoPlay={true}
          preload="none"
          data-src="https://373437-1168568-raikfcquaxqncofqfm.stackpathdns.com/files/synthapiary_web_1080p_02.mp4"
          data-lazyload=""
          data-behavior="softVideo"
          src="https://373437-1168568-raikfcquaxqncofqfm.stackpathdns.com/files/synthapiary_web_1080p_02.mp4"
        ></video>
      </LandingHero>

      <ContentStyle>
        <LandingPrivacyPolicy />
      </ContentStyle>
    </RootStyle>
  );
}
