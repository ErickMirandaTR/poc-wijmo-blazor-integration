using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using TR.BlazorWijmoLibrary;
using TR.BlazorWijmoLibrary.Pages;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

#if DEBUG
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");
builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
#endif


builder.RootComponents.RegisterCustomElement<WijmoGridComponent>("wijmo-grid-component");

await builder.Build().RunAsync();
