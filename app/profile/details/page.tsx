import Profile_Form from "@/components/Profile Components/Profile_Form";
import getUserAction from "@/app/actions/getUsers";
import ErrorMessage from "@/components/common/ErrorMessage/ErrorMessage";
type Props = {};

const Details =  async (props: Props) => {

  const user = await getUserAction();
  if (!user) {
    return <ErrorMessage />
  }

  return (
    <div className="no-scrollbar no-scrollbar  w-full overflow-y-scroll">
      <Profile_Form
        isIsolated={true}
        // disabled={false}
        user={user}
      />
    </div>
  );
};

export default Details;
