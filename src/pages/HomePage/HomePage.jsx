import DailyNorma from 'components/DailyNorma/DailyNorma';
import WaterRatioPanel from 'components/WaterRatioPanel/WaterRatioPanel';
import TodayWaterList from 'components/TodayWaterList/TodayWaterList';
import Calendar from 'components/Calendar/Calendar';

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <DailyNorma />
      <WaterRatioPanel />
      <TodayWaterList />
      <Calendar />
    </>
  );
};

export default HomePage;
