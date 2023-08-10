"use client";
import { IOrdersContentPage } from "./interfaces/orders.interface";
import { useState } from "react";
import { clsx } from "@/shared/lib/clsx";
import { verifyInvoiceChallengeOrder } from "./services/orders.services";
import { UserAuth } from "@/shared/interfaces/auth";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./Orders.module.scss";
import DesktopOrders from "./components/desktop-orders/Desktop-orders";
import MobileOrders from "./components/mobile-orders/Mobile-orders";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";


export default function OrdersPage({
  ordersPage,
  userAuth,
  currentPage
}: {
  ordersPage: IOrdersContentPage;
  userAuth: UserAuth;
  currentPage?: string
}) {

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handlePayChallenge({
    challengeOrderId,
  }: {
    challengeOrderId: number;
  }) {
    router.push("/challenge/invoice/" + challengeOrderId);
  }

  async function handleVerifyChallengOrder({
    challengeOrderId,
  }: {
    challengeOrderId: number;
  }) {
    setLoading(true);
    const { success, data, kindMessage } = await verifyInvoiceChallengeOrder({
      ...userAuth,
      challengeOrderId,
    });
    setLoading(false);
    if (success) {
      router.push("/challenge/analyzer?orderId=" + data.challengeOrderId);
    } else {
      const message = kindMessage ?? "Ha ocurrido un error inseperado";
      toast.error(message);
    }
  }

  return (
    <div className={clsx(styles.container, loading && styles.ableBtns)}>
      <div className={styles.details}>
        <span>{ordersPage.title}</span>
        <p>{ordersPage.description}</p>
      </div>
      {
        ordersPage.challengeOrders.length > 0 && <div className={styles.content}>
          <DesktopOrders
            orderPage={ordersPage}
            handlePayChallenge={handlePayChallenge}
            handleVerifyChallengOrder={handleVerifyChallengOrder}
          />
          <MobileOrders
            orderPage={ordersPage}
            handlePayChallenge={handlePayChallenge}
            handleVerifyChallengOrder={handleVerifyChallengOrder}
          />
          {ordersPage.pages.length > 1 && (
            <div className={styles.pages}>
              <Link
                href={"/challenge/orders?page=" + (!currentPage || Number(currentPage) === 0 || Number(currentPage) === 1 ? ordersPage.pages.length : Number(currentPage) - 1)}
                prefetch
              >
                <IoIosArrowBack />
              </Link>
              {ordersPage.pages.map((item) => (
                <Link href={"/challenge/orders?page=" + item} prefetch key={item}>
                  {item}
                </Link>
              ))}
              <Link
                href={
                  "/challenge/orders?page=" + (Number(currentPage) >= ordersPage.pages.length ? 1 : Number(currentPage ?? 1) + 1)}
                prefetch
              >
                <IoIosArrowForward />
              </Link>
            </div>
          )}
        </div>
      }
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
