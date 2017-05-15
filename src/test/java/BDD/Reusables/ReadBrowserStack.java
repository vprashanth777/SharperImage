package BDD.Reusables;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.w3c.dom.Node;
import org.w3c.dom.Element;
import java.io.File;

public class ReadBrowserStack {

	public String Browser;
	public String Browser_version;
	public String OperatingSystem;
	public String OperatingSystemversion;
	public String Device;
	public String Resolution;

	public ReadBrowserStack(String Environment) {

		try {

			File fXmlFile = new File("Data/BrowserStack.xml");
			DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
			DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
			Document doc = dBuilder.parse(fXmlFile);

			// optional, but recommended
			// read this -
			// http://stackoverflow.com/questions/13786607/normalization-in-dom-parsing-with-java-how-does-it-work
			doc.getDocumentElement().normalize();

			// System.out.println("Root element :" +
			// doc.getDocumentElement().getNodeName());

			NodeList nList = doc.getElementsByTagName("Environment");

			// System.out.println("----------------------------");

			for (int temp = 0; temp < nList.getLength(); temp++) {

				Node nNode = nList.item(temp);

				System.out.println("\nCurrent Element :" + nNode.getNodeName());

				if (nNode.getNodeType() == Node.ELEMENT_NODE) {

					Element eElement = (Element) nNode;

					System.out.println("Staff id : " + eElement.getAttribute("Name").equalsIgnoreCase(Environment));

					if (eElement.getAttribute("Name").equalsIgnoreCase(Environment)) {
						if (eElement.getElementsByTagName("Browser").getLength() == 1) {
							Browser = eElement.getElementsByTagName("Browser").item(0).getTextContent();
						}

						if (eElement.getElementsByTagName("BrowserVersion").getLength() == 1) {
							Browser_version = eElement.getElementsByTagName("BrowserVersion").item(0).getTextContent();
						}

						if (eElement.getElementsByTagName("OperatingSystem").getLength() == 1) {
							OperatingSystem = eElement.getElementsByTagName("OperatingSystem").item(0).getTextContent();
						}

						if (eElement.getElementsByTagName("OperatingSystemVersion").getLength() == 1) {
							OperatingSystemversion = eElement.getElementsByTagName("OperatingSystemVersion").item(0)
									.getTextContent();
						}

						if (eElement.getElementsByTagName("Device").getLength() == 1) {
							Device = eElement.getElementsByTagName("Device").item(0).getTextContent();
						}
						
						if (eElement.getElementsByTagName("Resolution").getLength() == 1) {
							Resolution = eElement.getElementsByTagName("Resolution").item(0).getTextContent();
						}

					}

				}
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}