import Sidebar from './dashboardComponents/sidebar'
import Leaderboard from './dashboardComponents/leaderboardComp'
import Navbar from './dashboardComponents/header'

export default function DashboardPage() {
    return (
        <div className='flex flex-row '>
        <Sidebar />
        <Navbar />
        <div className='m-20 flex align-center'>       
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper felis libero, 
            vel hendrerit felis ullamcorper a. Pellentesque ornare vel est eget faucibus. Proin sit 
            amet ex vel ipsum hendrerit efficitur id nec lacus. Morbi nulla sem, molestie non lectus ac,
             volutpat mattis felis. Fusce sed mollis ex, at vulputate magna. Praesent et ante ut arcu vestibulum 
             faucibus sit amet non eros. Ut enim tellus, euismod vel lorem et, euismod aliquet massa. Curabitur
              iaculis risus nec libero malesuada, et suscipit massa dictum. Maecenas finibus, diam cursus ornare scelerisque,
               est velit congue urna, ut ullamcorper neque leo a sem. Nunc pretium nibh in congue dignissim. Sed eget ipsum ac ex
                vestibulum ultrices non id tellus. Ut molestie augue eu vulputate hendrerit.
        </div>
        {/* <Leaderboard /> */}
        </div>
    )

}