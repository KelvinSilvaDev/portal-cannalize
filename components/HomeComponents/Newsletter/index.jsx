import * as Style from "./styles";
export default function Newsletter() {
  return (
    <Style.Wrapp>
      <div className="title">
        <h1>ASSINE NOSSA NEWSLETTER!</h1>
        <p>Fique por dentro de tudo que acontece</p>
      </div>
      <div className="formNL">
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <button type="submit">Assinar</button>
        </form>
      </div>
    </Style.Wrapp>
  );
}
