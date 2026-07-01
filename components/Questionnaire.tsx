"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { useState } from "react";

type FormData = {
  fullName: string;
  age: string;
  country: string;
  email: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  consent: boolean;
};

export default function Questionnaire() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert("Thank you! Your story has been submitted successfully.");
        reset();
      } else {
        alert(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to submit your story. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="questionnaire"
      className="bg-[#080808] py-24 px-6 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          subtitle="Participant Questionnaire"
          title="Share Your Story"
          description="Your experiences may become part of the documentary. Every story is treated with care and respect."
        />

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit(onSubmit)}
          className="mt-16 space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur"
        >
          {/* Personal Information */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-white">
                Full Name
              </label>

              <input
                {...register("fullName", { required: true })}
                className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-white">
                Email
              </label>

              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-white">
                Age
              </label>

              <input
                {...register("age")}
                className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
                placeholder="Age"
              />
            </div>

            <div>
              <label className="mb-2 block text-white">
                Country
              </label>

              <input
                {...register("country")}
                className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
                placeholder="Country"
              />
            </div>
          </div>

          <hr className="border-white/10" />

          {/* Question 1 */}
          <div>
            <label className="mb-4 block text-lg font-semibold text-white">
              1. Have you ever felt connected to someone before meeting them?
            </label>

            <div className="flex flex-wrap gap-6">
              {["Yes", "No", "Unsure"].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <input
                    type="radio"
                    value={item}
                    {...register("q1")}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              2. Have you experienced recurring dreams about an unknown person?
            </label>

            <textarea
              rows={5}
              {...register("q2")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 3 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              3. Have meaningful coincidences ever led you toward someone
              important?
            </label>

            <textarea
              rows={5}
              {...register("q3")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 4 */}
          <div>
            <label className="mb-4 block text-lg font-semibold text-white">
              4. Do you believe destiny plays a role in relationships?
            </label>

            <div className="flex flex-wrap gap-6">
              {["Yes", "No", "Maybe"].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <input
                    type="radio"
                    value={item}
                    {...register("q4")}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Question 5 */}
          <div>
            <label className="mb-4 block text-lg font-semibold text-white">
              5. Have you ever experienced an instant recognition when meeting
              someone?
            </label>

            <div className="flex flex-wrap gap-6">
              {["Yes", "No", "Not Sure"].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <input
                    type="radio"
                    value={item}
                    {...register("q5")}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Question 6 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              6. Describe a moment that changed your life before you understood
              its meaning.
            </label>

            <textarea
              rows={6}
              {...register("q6")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 7 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              7. If your story became part of this documentary, what message
              would you want the world to hear?
            </label>

            <textarea
              rows={6}
              {...register("q7")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Consent */}
          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
            <label className="flex items-start gap-3 text-gray-300">
              <input
                type="checkbox"
                {...register("consent", {
                  required: true,
                })}
                className="mt-1"
              />

              <span>
                I voluntarily consent to share my story with the Soulfire
                Chronicles documentary team for review and possible inclusion in
                the documentary.
              </span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-full py-4 text-lg font-semibold transition ${loading
                ? "cursor-not-allowed bg-gray-600 text-white"
                : "bg-amber-400 text-black hover:bg-amber-300"
              }`}
          >
            {loading ? "Submitting..." : "Submit My Story"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}
