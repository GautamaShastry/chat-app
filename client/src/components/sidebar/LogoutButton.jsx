import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout(); // logout state

	return (
		<div className="mt-auto flex items-center justify-center">
			{!loading ? (
				<div
					className="group relative cursor-pointer"
					onClick={logout}
					aria-label="Logout"
				>
					<BiLogOut
						className="w-8 h-8 text-white transition-transform transform hover:scale-110 hover:text-blue-500 cursor-pointer"
						title="Logout"
					/>
					<span className="absolute left-1/2 bottom-full mb-2 w-max -translate-x-1/2 rounded-md bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
						Logout
					</span>
				</div>
			) : (
				<div className="flex items-center justify-center">
					<span className="loading-spinner w-6 h-6 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></span>
				</div>
			)}
		</div>
	);
};

export default LogoutButton;
