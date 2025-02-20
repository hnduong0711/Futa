import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-futa-primary-light text-futa-heading-text px-4">
          <motion.h1
            className="text-[120px] font-bold leading-none text-futa-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            404
          </motion.h1>
          <motion.h2
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Ôi không! Trang bạn tìm kiếm không tồn tại.
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 max-w-md mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Có thể liên kết đã bị thay đổi hoặc trang này chưa bao giờ tồn tại. Hãy quay lại trang chủ hoặc tiếp tục khám phá.
          </motion.p>
          <Link
            to="/"
            className="flex items-center gap-2 bg-futa-primary text-white px-6 py-3 rounded-2xl font-semibold hover:bg-futa-heading-text transition-colors"
          >
            <ArrowLeft size={20} /> Quay về trang chủ
          </Link>
        </div>
      );
}

export default NotFoundPage