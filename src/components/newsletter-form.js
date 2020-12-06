/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Typewriter from '../images/new-typewriter.png';
import Pofo from '../images/pofo.svg';

const NewsletterForm = ({ custom }) => {
  const { register, handleSubmit, errors, formState } = useForm();
  const [hasPrivacyAccepted, setHasPrivacyAccepted] = useState(false);

  const onSubmit = (data) => {
    try {
      //Need to rename a few fields to get this to work with activecampaign
      let preppedData = { 'field[14]': data.custom, ...data };

      //Remove the old custom field (renamed above)
      const { custom, ...cleaned } = preppedData;

      //Convert to FormData
      let form_data = new FormData();
      for (let key in cleaned) {
        form_data.append(key, cleaned[key]);
      }

      fetch('https://gazduig71616.activehosted.com/proc.php', {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        body: form_data,
      });
    } catch (error) {
      // handle server errors
      console.log('Request failed', error);
    }
  };

  return (
    <div className="mx-auto flex mt-36 relative">
      <div className="hidden lg:flex md:w-1/2 justify-end items-center">
        <img className="absolute top-0 left-0 animate-float" src={Pofo} alt="Irogep" />
        <img className="absolute top-10 left-10" src={Typewriter} alt="Irogep" />
      </div>
      <div className="max-w-lg">
        <div>
          <h2 className="text-4xl md:text-5xl leading-brand font-extrabold">Az ügyfeleink 90%-át Instáról szerezzük</h2>
          <p className="text-md md:text-lg font-display-300 mt-4 mb-10">
            Írtunk is erről egy összefoglalót. Olvass bele, hátha találsz benne valami érdekeset!
          </p>
        </div>

        <h3 className="text-2xl leading-brand font-display font-extrabold my-8">
          Pötyögd be a mail címed, és már küldjük is!
        </h3>

        <form
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          name="ig-marketing"
          className="grid grid-cols-1 row-gap-4">
          {formState.isSubmitting ? (
            <p>Azonnal...</p>
          ) : formState.isSubmitSuccessful ? (
            <p>Készen is vagyunk...</p>
          ) : (
            <>
              <input type="hidden" name="u" value="1" ref={register({ required: true })} />
              <input type="hidden" name="f" value="1" ref={register({ required: true })} />
              <input type="hidden" name="s" ref={register({})} />
              <input type="hidden" name="c" value="0" ref={register({ required: true })} />
              <input type="hidden" name="m" value="0" ref={register({ required: true })} />
              <input type="hidden" name="act" value="sub" ref={register({ required: true })} />
              <input type="hidden" name="v" value="2" ref={register({ required: true })} />

              <input type="hidden" name="custom" value={custom} ref={register({ required: false })} />
              <div>
                <label htmlFor="full_name" className="sr-only">
                  Hogy szólíthatunk?
                </label>
                <div className="relative rounded-md">
                  <input
                    id="fullname"
                    name="fullname"
                    className="form-input bg-transparent  block w-full mb-4 py-3 px-4 placeholder-gray-500 border border-gray-500 transition ease-in-out duration-150"
                    placeholder="Hogy szólíthatunk?"
                    ref={register({ required: true, maxLength: 80 })}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Milyen e-mail címen érünk el?
                </label>
                <div className="relative rounded-md">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input  bg-transparent block w-full mb-8 py-3 px-4 placeholder-gray-500 border border-gray-500 transition ease-in-out duration-150"
                    placeholder="Milyen e-mail címen érünk el?"
                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="privacy" className="font-light text-xs">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    className={`form-input bg-transparent  mr-2 rounded-full p-1 transition ease-in-out duration-150 ${
                      hasPrivacyAccepted && 'bg-brand-blue-500'
                    }`}
                    required
                    onChange={() => setHasPrivacyAccepted(!hasPrivacyAccepted)}
                    checked={hasPrivacyAccepted}
                  />
                  Elfogadom az adatvédelmi nyilatkozatot és engedélyezem, hogy a megadott elérhetőségeken felvegyétek
                  velem a kapcsolatot.
                </label>
              </div>
              <div>
                <span className="inline-flex rounded-md mt-10">
                  <input
                    type="submit"
                    disabled={!hasPrivacyAccepted}
                    className={`primary-btn ${!hasPrivacyAccepted && 'bg-gray-500'}`}
                    value="Jöhet"
                  />
                </span>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
